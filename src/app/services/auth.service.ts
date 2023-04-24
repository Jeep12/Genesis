import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user!: User;
  constructor(private afAuth:AngularFireAuth) { }

  register(email:string,name:string,lastName:string,direction:string,birthData:string,numberPhone:string,password:string,repeatPassword:string) {

    // this.afAuth.createUserWithEmailAndPassword(email, password).then((user) => {
    //   console.log("Usuario creado con exito");
    // }).catch((error) => {});
  }

  verifyMail() {
    this.afAuth.currentUser.then(user => {
      user?.sendEmailVerification()})


    this.afAuth.currentUser
      .then((user) => user?.sendEmailVerification())
      .then(() => {
      })
  }
}
