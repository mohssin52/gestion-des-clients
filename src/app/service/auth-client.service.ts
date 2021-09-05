import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthClientService {

  constructor(private afAuth:AngularFireAuth ) { }
  Login(email:string,password:string){

   return  new Promise((resolve,rejects)=> {
     this.afAuth.auth.signInWithEmailAndPassword(email,password)
     .then((data) => resolve(data),(error) => rejects(error) )

     
   }) 

  }
  Registre(email:string,password:string){
    
   return  new Promise((resolve,rejects)=> {
    this.afAuth.auth.createUserWithEmailAndPassword(email,password)
    .then((data) => resolve(data),(error) => rejects(error) )

    
  }) 
  }
  getAuth(){
    return this.afAuth.authState

  }
  
  LoginWhitGoogle(email:string,password:string){

    return  new Promise((resolve,rejects)=> {
      this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider())
      .then((data) => resolve(data),(error) => rejects(error) )
 
      
    }) 
 
   }
   lougOut(){
     this.afAuth.auth.signOut()
   }

}
