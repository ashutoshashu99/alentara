import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';

// Import your category components
import { Tng } from './tng/tng';
import { Agro } from './agro/agro';
import { Handicraft } from './handicraft/handicraft';
import { Veg } from './veg/veg';
import { ExoticFruits } from './exotic-fruits/exotic-fruits';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    title: 'AlentaraExim - Home',
    component: LandingPage
  },

  // PRODUCT CATEGORY ROUTES
  {
    path: 'toys-and-games',
    title: 'Toys & Games - AlentaraExim',
    component: Tng
  },
  {
    path: 'agro-commodities',
    title: 'Agro Commodities - AlentaraExim',
    component: Agro
  },
  {
    path: 'handicrafts',
    title: 'Handicrafts - AlentaraExim',
    component: Handicraft
  },
  {
    path: 'fresh-vegetables',
    title: 'Fresh Vegetables - AlentaraExim',
    component: Veg
  },
  {
    path: 'exotic-fruits',
    title: 'Exotic Fruits - AlentaraExim',
    component: ExoticFruits
  },

  {
    path: '**',
    redirectTo: 'home'
  }
];