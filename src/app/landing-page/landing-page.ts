import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router'; // Added Router for dynamic navigation
import { FormsModule } from '@angular/forms';
import { SERVICES, PRODUCT_CATEGORIES, FEATURES, LICENSES, CONTACT_INFO, USER_QUERIES } from '../data/site-data';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink], 
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage implements OnInit, AfterViewInit, OnDestroy {
  // Data Binding from JS file
  services = SERVICES;
  productCategories = PRODUCT_CATEGORIES;
  features = FEATURES;
  licenses = LICENSES;
  contactInfo = CONTACT_INFO;

  @ViewChild('marqueeContainer') marqueeContainer!: ElementRef;
  private scrollInterval: any;

  constructor(private router: Router) {} // Inject router for redirection

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.startScrolling();
  }

  ngOnDestroy() {
    this.stopScrolling();
  }

  /**
   * Handles Category Redirection
   * Data is coming from the link property in PRODUCT_CATEGORIES
   */
  navigateToCategory(link: string, categoryName: string): void {
    // Generate a slug from the name (e.g., "Agro Commodities" -> "agro-commodities")
    const categorySlug = categoryName.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-');
    // Navigation goes to a separate page for each category
    this.router.navigate([link, categorySlug]);
  }

 submitQuote(formData: any): void {
  // 1. Create the structured object from form data
  const newQuery = {
    id: Date.now(), // Unique ID based on time
    timestamp: new Date().toISOString(),
    customerName: formData.name,
    customerEmail: formData.email,
    customerPhone: formData.phone,
    destination: formData.country,
    productType: formData.product,
    status: 'Pending'
  };

  // 2. Insert the object into the imported array
  // Note: This updates the data in the app's memory for the current session.
  USER_QUERIES.push(newQuery);

  // 3. Log the "database" to see the data arriving
  console.log('Updated Query Database:', USER_QUERIES);

  // 4. User feedback
  if (formData.email) {
    alert(`Inquiry Transmitted! Reference ID: ${newQuery.id}. We will contact you at ${formData.email}.`);
  }
}

  downloadProfile(): void {
    const fileUrl = 'assets/docs/Alentara_Exim_Profile.pdf';
    const fileName = 'Alentara_Exim_Company_Profile.pdf';
    const link = document.createElement('a'); // Anchor is fetching the local asset
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Marquee Logic
  startScrolling() {
    const container = this.marqueeContainer.nativeElement;
    const scrollSpeed = 50; 
    let scrollPosition = 0;

    this.scrollInterval = setInterval(() => {
      scrollPosition += 1;
      container.scrollLeft = scrollPosition;
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
        container.scrollLeft = 0;
      }
    }, scrollSpeed);
  }

  stopScrolling() {
    if (this.scrollInterval) clearInterval(this.scrollInterval);
  }

  @HostListener('mouseenter') onMouseEnter() { this.stopScrolling(); }
  @HostListener('mouseleave') onMouseLeave() { this.startScrolling(); }

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}