import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NosserviceComponent } from './components/nosservice/nosservice.component';
import { HomeComponent } from './components/home/home.component';
import { LayerComponent } from './components/layer/layer.component';
import { GestionafriqueComponent } from './components/gestionafrique/gestionafrique.component';
import { ContactComponent } from './components/contact/contact.component';
import { NosmetiersComponent } from './components/nosmetiers/nosmetiers.component';
import { ServiceDetailComponent } from './components/service-detail/service-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NosserviceComponent,
    HomeComponent,
    LayerComponent,
    GestionafriqueComponent,
    ContactComponent,
    NosmetiersComponent,
    ServiceDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
