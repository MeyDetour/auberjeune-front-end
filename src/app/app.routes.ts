import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AuthComponent} from './pages/admin/auth/auth.component';

export const routes: Routes = [
  {
    path : "",
    component : HomeComponent
  },  {
    path : "admin/auth",
    component : AuthComponent
  },
];
