import {Component} from '@angular/core';
import {AlertController, LoadingController, NavController} from 'ionic-angular';
import {HomePage} from "../home/home";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SharedProvider} from "../../providers/shared";
import {SignupForm} from "../../models/SignupForm";
import {AppResponse} from "../../models/AppResponse";
import {SigninForm} from "../../models/SigninForm";
import {ConfigProvider} from "../../providers/config";

@Component({
  selector: 'page-start',
  templateUrl: 'start.html'
})
export class StartPage {

  view: string = 'start';

  signupForm = this.fb.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    phone: ['', Validators.required],
    address: ['', Validators.required]
  });

  signinForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    public navCtrl: NavController,
    public fb: FormBuilder,
    public loadingCtrl: LoadingController,
    public shared: SharedProvider,
    public alertCtrl: AlertController,
    public config: ConfigProvider
  ) {

  }

  openHome() {
    this.navCtrl.setRoot(HomePage);
  }

  onSignup() {
    const loader = this.loadingCtrl.create();
    loader.present();
    const signupForm: SignupForm = this.signupForm.value;
    this.shared.signup(signupForm).subscribe((data: AppResponse) => {
      loader.dismiss();
      if (data.response) {
        this.view = 'start';
        this.alertCtrl.create({
          title: 'Success',
          message: "Sign up is complete, please check your inbox for confirmation.",
          buttons: ['OK']
        }).present();
      } else {
        this.alertCtrl.create({
          title: 'Error',
          message: data.error.msg,
          buttons: ['OK']
        }).present();
      }
    });
  }

  onSignin() {
    const loader = this.loadingCtrl.create();
    loader.present();
    // const signinForm: SigninForm = this.signinForm.value;
    // this.shared.signin(signinForm).subscribe((data: AppResponse) => {
    //   loader.dismiss();
    //   if (data.response) {
    //     this.view = 'start';
    //
    //   } else {
    //     this.alertCtrl.create({
    //       title: 'Error',
    //       message: data.error.msg,
    //       buttons: ['OK']
    //     }).present();
    //   }
    // });

    const onLoad = function () {
      console.log(this.responeText);
    };

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", this.config.api_url + 'api/login/check?appKey=' + this.config.api_key, true);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
    // xhttp.onreadystatechange = function() {
    //   loader.dismiss();
    //   console.log(xhttp.response);
    // };
    xhttp.addEventListener('load', onLoad);
    xhttp.send('email='+this.signinForm.get('email').value + '&password='+ this.signinForm.get('password').value);
  }
}
