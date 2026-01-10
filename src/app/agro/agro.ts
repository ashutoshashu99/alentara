import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agro.html',
  styleUrl: './agro.css',
})
export class Agro {
  // Array with specific EXIM details
  products = [
    {
      name: 'Basmati Rice',
      grade: 'Premium Long Grain',
      origin: 'Indo-Gangetic Plains',
      packaging: '5kg, 10kg, 25kg Jute/BOPP Bags',
      description: 'Aromatic long-grain rice aged for 12-24 months for superior fluffiness.',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80'
    },
    {
      name: 'Turmeric (Curcumin)',
      grade: 'Alleppey Finger / Ground',
      origin: 'Southern India',
      packaging: 'Vacuum Packed Boxes',
      description: 'High curcumin content (5%+) sourced directly from ethical farm clusters.',
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d0c9cb5?auto=format&fit=crop&q=80'
    }
  ];

  goBack() {
    window.history.back();
  }
}