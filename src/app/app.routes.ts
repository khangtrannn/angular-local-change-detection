import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', loadComponent: async () => (await import('./demo/default-strategy.component')).DefaultStrategyComponent },
];
