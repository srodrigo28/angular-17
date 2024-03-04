import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userName : string;
  userPassword : string;

  constructor(private router: Router){ }

  login(){
    if( this.userName === "" || this.userName === null || this.userName === undefined){
      alert("Por favor preencher o campo nome")
    }else{
      sessionStorage.setItem('userName', this.userName);
      this.router.navigate(['/home']);
    }
  }

  registar(){
    this.router.navigate(['/register']);
  }
}
