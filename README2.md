### Crude completo com angular 17.

#### Referências
https://www.udemy.com/course/curso-angular-17-crud-completo-com-firebase/learn/lecture/41591896#overview

``` Ultimo visto
https://www.udemy.com/course/curso-angular-17-crud-completo-com-firebase/learn/lecture/41966992#questions
```

#### Passos iniciais 

[x] npm install -g @angular/cli

[x] npm install -g @angular/cli --force

[x] npx ng new angular-app2 --no-standalone

[x] ng new angular-app2

#### ng serve

#### Comandos Angular
configurar o tsconfig.ts
  "strictPropertyInitialization": false,
ng serve

import app.module.ts
    FormsModule,
    ReactiveFormsModule,

[x] ng add @ng-bootstrap/ng-bootstrap
[x] https://ng-bootstrap.github.io/#/home

[x ] ng g c components/menu
[x] imagens
[x] ng g c pages/login
[x] ng g c pages/home
[x] ng g c pages/register
[x] ng g c pages/user-crud
[] ng g c pages/user-crud/modal-form-user
[] ng g c pages/user-crud/modal-view-user

[] ng g service services/users
[] ng g interface services/user

[] ng g environments

#### Firebase
apelido firebase : app-angular

const firebaseConfig = {
  apiKey: "AIzaSyCJfvVYnGltl2xVmCc_4PRQV7XaClKv73E",
  authDomain: "grud-angular.firebaseapp.com",
  projectId: "grud-angular",
  storageBucket: "grud-angular.appspot.com",
  messagingSenderId: "186347792529",
  appId: "1:186347792529:web:b915f3bad6f822d1f2b730",
  measurementId: "G-EDLLB0N22E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

#### Dependências

npm install firebase [x]
ng add @angular/fire [x]

https://material.angular.io/components/table/examples