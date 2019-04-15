import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage implements OnInit {
  productDetails : any;

  constructor(public router: Router) {
    
    
   }

  goHome(){
    this.router.navigate(['home']);
  }
  ngOnInit() {
  }

}
