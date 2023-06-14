import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {


  @Input()
  services: boolean = false;

  @Input()
  metiers: boolean = false;

  @Input()
  decouverte: boolean = true;

  @Input()
  contact: boolean = true;


}
