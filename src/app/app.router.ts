import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '',
    redirectTo: '/HomeComponent',
    pathMatch: 'full'
  },
  { path: '**', component: PagenotfoundComponent }
];
export default appRoutes;
