import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private authService:AuthService,private router:Router,
    private alertCtrl:AlertController) { }
   
  async logOut():Promise<void>{
    this.authService.logOutUser().
    then(
        ()=>{
          this.router.navigateByUrl('login');
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
