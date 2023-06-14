import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nosservice',
  templateUrl: './nosservice.component.html',
  styleUrls: ['./nosservice.component.css']
})
export class NosserviceComponent {

  constructor(private router: Router){}

  navigateTo(id: any){
    this.router.navigate(['detail', id])
  }

}
