import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  Articles : any[];
  detail: any[];
    constructor(public navCtrl: NavController, public router : Router){

      this.Articles = [
        {nom : 'Télévision', prix : 145, details : 'Lorem ipsum de Télévision'},
        {nom : 'Téléphone', prix : 89, details : 'Lorem ipsum de Téléphone'},
        {nom : 'Sac à dos', prix : 11, details : 'Lorem ipsum de Sac à dos'},
        {nom : 'PC', prix : 100 , details : 'Lorem ipsum de PC'}
      ]
     
    }

    showDetails(data: any): void{
      this.router.navigate(['information'], data);
      console.log(this.detail);
    }
    

}
