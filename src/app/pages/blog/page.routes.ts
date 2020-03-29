import { Routes } from '@angular/router';

import { StoriesComponent } from '../blog/stories/stories.component';
import { TravelsComponent } from '../blog/travels/travels.component';

export const routes: Routes = [

    {
        path: 'stories',
        component: StoriesComponent
      },
      {
        path: 'travels',
        component: TravelsComponent
      }
    ];