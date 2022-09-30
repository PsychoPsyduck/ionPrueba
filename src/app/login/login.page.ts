import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;
  mail: string;
  pass: string;
  msjError: string;
  logeando=true;
  ocultarVerificar: boolean;

  constructor(private fb: FormBuilder, private authService: AuthServiceService, public router: Router, public alertController: AlertController, private loadingController: LoadingController) { }


  get email() {
		return this.form.get('email');
	}

  get password() {
		return this.form.get('password');
	}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async register() {
		const loading = await this.loadingController.create();
		await loading.present();

		const user = await this.authService.register(this.form.value);
		await loading.dismiss();

		if (user) {
      this.presentAlert('VAMO BOKEE');
			// this.router.navigateByUrl('/home', { replaceUrl: true });
		} else {
			this.presentAlert('Registration failed'); //, 'Please try again!'
		}
	}

  async login() {
		const loading = await this.loadingController.create();
		await loading.present();

		const user = await this.authService.login(this.form.value);
		await loading.dismiss();

		if (user) {
      this.presentAlert('VAMO BOKEE');
			// this.router.navigateByUrl('/home', { replaceUrl: true });
		} else {
			this.presentAlert('Login failed'); //, 'Please try again!'
		}
	}

  // Entrar(){
  //   const { mail, clave } = this.form.value;

  //   this.authService.login(mail, clave).then( res => {
  //     this.router.navigate(['/home']);
  //   }).catch(err => this.presentAlert(err));
  // }

  Limpiar(){
    this.form.setValue({
      email: "",
      password: ""
    });
  }

  async presentAlert(errores) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: errores,
      buttons: ['OK']
    });

    await alert.present();
  }

  Invitado() {
    this.form.setValue({
      email: "admin@mail.com",
      password: "adminmail"
    });
  }

  AutoLog(usuario) {
    switch (usuario) {
      case "admin" :
        this.form.setValue({
          email: "admin@admin.com",
          password: "111111"
        });
        break;
      case "invitado" :
        this.form.setValue({
          email: "invitado@invitado.com",
          password: "222222"
        });
        break;
      case "usuario" :
        this.form.setValue({
          email: "usuario@usuario.com",
          password: "333333"
        });
        break;
      case "anonimo" :
        this.form.setValue({
          email: "anonimo@anonimo.com",
          password: "444444"
        });
        break;
      case "tester" :
        this.form.setValue({
          email: "tester@tester.com",
          password: "555555"
        });
        break;
      
    }
  }
}