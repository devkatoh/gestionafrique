import { NosmetiersComponent } from './components/nosmetiers/nosmetiers.component';
import { ContactComponent } from './components/contact/contact.component';
import { GestionafriqueComponent } from './components/gestionafrique/gestionafrique.component';
import { AppComponent } from './app.component';
import { NosserviceComponent } from './components/nosservice/nosservice.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LayerComponent } from './components/layer/layer.component';
import { ServiceDetailComponent } from './components/service-detail/service-detail.component';

const routes: Routes = [
  {
    path: "",
    component: LayerComponent,
    children: [
      { path: "nos-services", component: NosserviceComponent },
      { path: "nos-metiers", component: NosmetiersComponent },
      { path: "contact", component: ContactComponent },
      { path: "gestionafrique", component: GestionafriqueComponent },
      { path: "detail/:id", component: ServiceDetailComponent },
      { path: "**", component: HomeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
