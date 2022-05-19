import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path : "home", component:HomeComponent, pathMatch: 'full' },
  {path : "about", component:AboutUsComponent, pathMatch: 'full' },
  {path : "contact", component:ContactUsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
