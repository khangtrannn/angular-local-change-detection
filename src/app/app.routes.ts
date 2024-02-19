import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'on-push-strategy-demo', loadComponent: async () => (await import('./demo/on-push-strategy.component')).OnPushStrategyComponent },
  { path: 'all-on-push-strategy-demo', loadComponent: async () => (await import('./demo/all-on-push-strategy.component')).AllOnPushStrategyComponent },
  { path: '', pathMatch: 'full', loadComponent: async () => (await import('./demo/default-strategy.component')).DefaultStrategyComponent },
];
