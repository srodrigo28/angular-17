import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userName : string;

  constructor(private router: Router){ }

  login(){
    sessionStorage.setItem('userName', this.userName);
    console.log("Servidor offline: " + this.userName);

    this.router.navigate(['/home']);
  }

  registar(){
    console.log("Servidor offline");
    this.router.navigate(['/register']);
  }
}
