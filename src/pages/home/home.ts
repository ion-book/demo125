import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { StripePage } from "../stripe/stripe";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  open(){
    this.navCtrl.push(StripePage)
  }
}
