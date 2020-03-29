import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TutorialsComponent } from './tutorials/tutorials.component';





@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
    TutorialsComponent

  ],
  imports: [
    CommonModule
  ],
  exports: [
      AboutComponent,
      ContactComponent,
      HomeComponent,
      TutorialsComponent

   ]

  
})
export class PagesModule { }