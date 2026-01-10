import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-handicraft',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './handicraft.html',
  styleUrl: './handicraft.css',
})
export class Handicraft {
  products = [
    {
      name: 'Brass Inlay Artifacts',
      grade: 'Hand-burnished A-Grade',
      origin: 'Moradabad (Brass City)',
      packaging: 'Double-walled Export Padding',
      description: 'Intricately designed metalwork showcasing centuries-old Indian metal-casting traditions.',
      image: 'https://images.unsplash.com/photo-1614362143323-346765275604?auto=format&fit=crop&q=80'
    },
    {
      name: 'Hand-Knotted Silk Carpets',
      grade: 'High Knot Density (250+ KPSI)',
      origin: 'Bhadohi, Uttar Pradesh',
      packaging: 'Moisture-proof Roll Tubes',
      description: 'Premium silk-on-cotton rugs featuring Persian and Mughlai-inspired motifs.',
      image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&q=80'
    }
  ];

  goBack() { window.history.back(); }
}