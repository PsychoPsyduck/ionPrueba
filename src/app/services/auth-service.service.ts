import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import * as firebase from 'firebase';
import {
	Auth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  // constructor(private router: Router) { }
  constructor(private auth: Auth) {}

  // login(email: string, password: string){
  //   return new Promise ((resolve, rejects) => {
      // firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
      //   resolve(user);
      // }).catch(err => rejects(err));
  //   });
  // }

  // public logOut(){
  //   return new Promise ((resolve, rejects) => {
      // firebase.auth().signOut().then(user => {
      //   resolve(user);
      //   this.router.navigate(['/login']);
      // }).catch(err => rejects(err));
  //   });
  // }

  // getCurrentUserId(): string {
  //   return firebase.auth().currentUser ? firebase.auth().currentUser.uid : null;
  // }

  // getCurrentUserMail(): string {
  //   return firebase.auth().currentUser.email;
  // }


  async register({ email, password }) {
		try {
			const user = await createUserWithEmailAndPassword(this.auth, email, password);
			return user;
		} catch (e) {
			return null;
		}
	}

	async login({ email, password }) {
		try {
			const user = await signInWithEmailAndPassword(this.auth, email, password);
			return user;
		} catch (e) {
			return null;
		}
	}

	logout() {
		return signOut(this.auth);
	}
}