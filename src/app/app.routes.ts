import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { StoriesComponent } from './pages/stories/stories.component';
import { TravelsComponent } from './pages/travels/travels.component';
import { TutorialsComponent } from './pages/tutorials/tutorials.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'stories',
    component: StoriesComponent
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
    path: 'travels',
    component: TravelsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];
