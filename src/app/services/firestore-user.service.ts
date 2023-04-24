import { Injectable } from '@angular/core';
import { collection, Firestore, setDoc, doc, addDoc, where, query, getDocs, getDoc, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreUserService {

  constructor() { }

  // setUser(email:string,name:string,lastName:string,direction:string,birthData:string,numberPhone:string,password:string,repeatPassword:string) {

  // }
  async setUser(prueba:string){
    console.log(prueba);
  }

}
