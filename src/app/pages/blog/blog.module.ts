import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoriesComponent } from '../blog/stories/stories.component';
import { TravelsComponent } from '../blog/travels/travels.component';
import { RouterModule } from '@angular/router';
import { routes } from './page.routes';



@NgModule({
  declarations: [
    StoriesComponent,
    TravelsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild (routes)
  ],
  exports: [
    
    StoriesComponent,
    TravelsComponent
   

 ]

})
export class BlogModule { }
