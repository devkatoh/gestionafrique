import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

  status = false;
  addToggle() {
    this.status = !this.status;
  }

  accueil: boolean = true;
  services: boolean = false;
  metiers: boolean = false;
  contact: boolean = false;
  gestion: boolean = false;

  menuClick(menu: string) {
    switch (menu) {
      case 'services':
        this.services = true;
        this.metiers = false;
        this.accueil = false;
        this.contact = false;
        this.gestion = false;
        break;

      case 'metiers':
        this.services = false;
        this.metiers = true;
        this.accueil = false;
        this.contact = false;
        this.gestion = false;
        break;

      case 'gestion':
        this.services = false;
        this.metiers = false;
        this.accueil = false;
        this.contact = false;
        this.gestion = true;
        break;

      case 'contact':
        this.services = false;
        this.metiers = false;
        this.accueil = false;
        this.contact = true;
        this.gestion = false;
        break;

      default:
        this.services = false;
        this.metiers = false;
        this.accueil = true;
        this.contact = false;
        this.gestion = false;
        break;
    }
  }
}
