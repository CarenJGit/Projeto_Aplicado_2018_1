import { Routes, RouterModule } from '@angular/router';
 import { LoginComponent } from './autenticacao/login/login.component';
import { MenuComponent } from './shared/menu/menu.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'menu', component: MenuComponent },
]


export class AppRoutingModule { }