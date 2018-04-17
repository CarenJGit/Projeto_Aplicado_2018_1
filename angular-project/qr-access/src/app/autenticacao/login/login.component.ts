import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private aAngularFire: AngularFireAuth, private aRouter: Router) { }

  ngOnInit() {
  }

  Login(formLogin: NgForm) {
    if (!formLogin.valid) {
      return
    }
    this.aAngularFire.auth.signInWithEmailAndPassword(formLogin.controls.login.value, formLogin.controls.senha.value)
      .then(ok => {
        this.aRouter.navigate(["/menu"]);
      })

    formLogin.controls.login.setValue('');
    formLogin.controls.senha.setValue('');
  }
}
