import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { MenuComponent } from './components/menu/menu.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { MatIconModule } from '@Angular/material/icon';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { UserCrudComponent } from './pages/user-crud/user-crud.component'
import {MatTableModule} from '@angular/material/table'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input'
import {MatPaginatorModule} from '@angular/material/paginator'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    MenuComponent,
    UserCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInput,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    provideFirebaseApp(() => initializeApp({"projectId":"grud-angular","appId":"1:186347792529:web:b915f3bad6f822d1f2b730","storageBucket":"grud-angular.appspot.com","apiKey":"AIzaSyCJfvVYnGltl2xVmCc_4PRQV7XaClKv73E","authDomain":"grud-angular.firebaseapp.com","messagingSenderId":"186347792529","measurementId":"G-EDLLB0N22E"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
