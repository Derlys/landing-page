import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { StoriesComponent } from './stories/stories.component';
import { TravelsComponent } from './travels/travels.component';
import { TutorialsComponent } from './tutorials/tutorials.component';





@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
    StoriesComponent,
    TravelsComponent,
    TutorialsComponent

  ],
  imports: [
    CommonModule
  ],
  exports: [
      AboutComponent,
      ContactComponent,
      HomeComponent,
      StoriesComponent,
      TravelsComponent,
      TutorialsComponent

   ]

  
})
export class PagesModule { }