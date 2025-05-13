import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CalendarioComponent } from './components/calendario/calendario.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'calendario', component: CalendarioComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
