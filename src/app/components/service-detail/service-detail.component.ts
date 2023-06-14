import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent {

  id: number;

  constructor(private route: ActivatedRoute, private router: Router){
    this.id = route.snapshot.params['id'];
    console.log(this.id)
  }

  navigateTo(url: string){
    this.router.navigate([url])
  }

}
