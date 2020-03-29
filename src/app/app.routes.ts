import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { TutorialsComponent } from './pages/tutorials/tutorials.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'tutorials',
    component: TutorialsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./pages/blog/blog.module').then(m => m.BlogModule)
  }
];
