import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FaqComponent } from './components/faq/faq.component';
import { AfricaComponent } from './components/africa/africa.component';
import { AsiaComponent } from './components/asia/asia.component';
import { NorthAmericaComponent } from './components/north-america/north-america.component';
import { SouthAmericaComponent } from './components/south-america/south-america.component';
import { EuropeComponent } from './components/europe/europe.component';
import { AustraliaComponent } from './components/australia/australia.component';
import { AntarcticaComponent } from './components/antarctica/antarctica.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    NavbarComponent,
    FooterComponent,
    FaqComponent,
    AfricaComponent,
    AsiaComponent,
    NorthAmericaComponent,
    SouthAmericaComponent,
    EuropeComponent,
    AustraliaComponent,
    AntarcticaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
