import { Injectable } from '@angular/core';
import { collection, Firestore, setDoc, doc, addDoc, where, query, getDocs, getDoc, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private db: Firestore) {

   }


}
