import { LoginService } from '../../app/services/LoginService';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder , FormGroup} from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myForm : FormGroup;

  constructor(public navCtrl: NavController , fb : FormBuilder , private _lg : LoginService) {
    this.myForm = fb.group({
      email : [''],
      password : ['']
    });
  }
  login(){
      console.log(this._lg.login({}));
  }

}
