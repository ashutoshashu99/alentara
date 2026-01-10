import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-veg',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './veg.html',
  styleUrl: './veg.css',
})
export class Veg {
  products = [
    {
      name: 'Red Onions',
      grade: 'Export Quality (55mm+)',
      origin: 'Nashik, Maharashtra',
      packaging: '25kg Mesh Bags',
      description: 'Globally preferred for high pungency and extended shelf life. Global-GAP certified.',
      image: 'https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&q=80'
    },
    {
      name: 'Fresh Green Chillies',
      grade: 'G4 / Teja Variety',
      origin: 'Andhra Pradesh',
      packaging: '4kg / 5kg Corrugated Boxes',
      description: 'Directly sourced from cold-storage units to maintain moisture and spiciness.',
      image: 'https://images.unsplash.com/photo-1588253518679-119c76a53f02?auto=format&fit=crop&q=80'
    }
  ];

  goBack() { window.history.back(); }
}