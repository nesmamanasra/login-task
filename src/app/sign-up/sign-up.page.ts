import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(private authService:AuthService,private router:Router,
    private alertCtrl:AlertController) { }

  ngOnInit() {
  }

  
  async signUpUser(form: { value: { email: string; password: string; }; }):Promise<void>{
    this.authService.signUpUser(form.value.email, form.value.password).
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

}
