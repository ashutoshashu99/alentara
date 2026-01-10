import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exotic-fruits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exotic-fruits.html',
  styleUrl: './exotic-fruits.css',
})
export class ExoticFruits {
  products = [
    {
      name: 'Alphonso Mangoes',
      grade: 'A-Grade / GI Tagged',
      origin: 'Ratnagiri, Maharashtra',
      packaging: 'Air-vented Cardboard Trays',
      description: 'The king of fruits, naturally ripened and strictly screened for skin blemishes.',
      image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80'
    },
    {
      name: 'Pomegranate (Bhagwa)',
      grade: 'Export Standard (300g+)',
      origin: 'Solapur Region',
      packaging: 'CFC Cartons (Plastic-free)',
      description: 'Deep red arils with soft seeds, processed in ISO-certified pack-houses.',
      image: 'https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&q=80'
    }
  ];

  goBack() { window.history.back(); }
}