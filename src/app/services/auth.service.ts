import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  LoginUser(
    email:string,
    password:string
  ):Promise<firebase.auth.UserCredential>{
    return firebase.auth().signInWithEmailAndPassword(email,password);
   }
  
   signUpUser(
    email:string,
    password:string
   ):Promise<any>{
    return firebase.auth().createUserWithEmailAndPassword(email,password)
   }



   logOutUser():Promise<void>{
     return firebase.auth().signOut();
   }
}
