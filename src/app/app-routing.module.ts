import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfricaComponent } from './components/africa/africa.component';
import { AntarcticaComponent } from './components/antarctica/antarctica.component';
import { AsiaComponent } from './components/asia/asia.component';
import { AustraliaComponent } from './components/australia/australia.component';
import { ContactComponent } from './components/contact/contact.component';
import { EuropeComponent } from './components/europe/europe.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { NorthAmericaComponent } from './components/north-america/north-america.component';
import { SouthAmericaComponent } from './components/south-america/south-america.component';
import { FaqComponent } from './components/faq/faq.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "gallery",
    component: GalleryComponent
  },
  {
    path: "contact-us",
    component: ContactComponent
  },
  {
    path: "faq",
    component: FaqComponent
  },
  {
    path: "continents/africa",
    component: AfricaComponent
  },
  {
    path: "continents/asia",
    component: AsiaComponent
  },
  {
    path: "continents/north-america",
    component: NorthAmericaComponent
  },
  {
    path: "continents/south-america",
    component: SouthAmericaComponent
  },
  {
    path: "continents/europe",
    component: EuropeComponent
  },
  {
    path: "continents/australia",
    component: AustraliaComponent
  },
  {
    path: "continents/antarctica",
    component: AntarcticaComponent
  },


  {
    redirectTo: "",
    path: "**"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
