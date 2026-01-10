import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tng',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tng.html',
  styleUrl: './tng.css',
})
export class Tng {
  products = [
    {
      name: 'Handcrafted Wooden Blocks',
      grade: 'Non-Toxic / Organic Finish',
      origin: 'Channapatna Craft Cluster',
      packaging: 'Eco-friendly Kraft Boxes',
      description: 'Sustainable ivory wood toys colored with natural vegetable dyes.',
      image: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&q=80'
    },
    {
      name: 'Plush Soft Toys',
      grade: 'Hypoallergenic Fabric',
      origin: 'Delhi-NCR Manufacturing Unit',
      packaging: 'Vacuum Sealed Poly-packs',
      description: 'Strictly compliant with international child safety regulations and durability tests.',
      image: 'https://images.unsplash.com/photo-1559449134-a857039822aa?auto=format&fit=crop&q=80'
    }
  ];

  goBack() { window.history.back(); }
}