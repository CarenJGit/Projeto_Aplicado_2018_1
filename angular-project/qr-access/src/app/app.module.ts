import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './autenticacao/login/login.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './shared/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';

import { FirebaseConfigTest} from './../environments/FirebaseConfig'
import { routes } from './app.routes';
import { CadastroLocaisAcessoComponent } from './cadastro/cadastro-locais-acesso/cadastro-locais-acesso.component';

@NgModule({
  declarations: [
     AppComponent,
     LoginComponent,
     MenuComponent,
     CadastroLocaisAcessoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(FirebaseConfigTest)      
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
