import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { MenuComponent } from './components/menu/menu.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatIconModule } from '@Angular/material/icon';
import { UserCrudComponent } from './pages/user-crud/user-crud.component'
import { MatTableModule } from '@angular/material/table'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input'
import { MatPaginatorModule } from '@angular/material/paginator'
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment.development';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalViewUserComponent } from './pages/user-crud/modal-view-user/modal-view-user.component';
import { ModalFormUserComponent } from './pages/user-crud/modal-form-user/modal-form-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    MenuComponent,
    UserCrudComponent,
    ClienteComponent,
    ModalViewUserComponent,
    ModalFormUserComponent
  ],
  imports: [
    BrowserModule,
    MatInput,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
