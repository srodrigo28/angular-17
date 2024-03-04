import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private router: Router){ }

  userName: string;
  userEmail: string;
  userPassword: string;
  userPasswordConfirmar: string;

  registar(){
    if( this.userName === "" || this.userName === null || this.userName === undefined){
      alert("Por favor preencher o campo nome")
    }else if( this.userPassword === "" || this.userPassword === null || this.userPassword === undefined || this.userPassword.length < 6) {
      alert("Por favor preencher o campo senha no minimo 6 caracteres")
    }else{
      sessionStorage.setItem('userName', this.userName);
      this.router.navigate(['/home']);
    }
  }
  cancelar(){
    this.router.navigate(['/']);
  }
}
