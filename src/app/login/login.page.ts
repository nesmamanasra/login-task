import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService:AuthService,private router:Router,
    private alertCtrl:AlertController) { }

  ngOnInit() {
  }
  
  async loginUser(form: { value: { email: string; password: string; }; }):Promise<void>{
      this.authService.LoginUser(form.value.email, form.value.password).
      then(
          ()=>{
            this.router.navigateByUrl('home');
          },
          async error =>{
            const alert = await this.alertCtrl.create({
              message:error.message,
              buttons:[{text:'ok',role:'cancel'}],
            });
            await alert.present();
          });
  }

 
  
  goToSignUp(){
    this.router.navigateByUrl('sign-up');
  }
}
