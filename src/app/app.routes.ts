import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  {
    path: 'dashboard',
    loadComponent: () =>
      import(
        './features/dashboard/pages/dashbord/dashbord.component'
      ).then((obj)=>obj.DashbordComponent),
  },
];
