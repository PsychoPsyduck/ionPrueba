import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { firebaseConfig } from '../environments/environment';

// // Firebase App (the core Firebase SDK) is always required and must be listed first
// import * as firebase from "firebase/app";
// // Add the Firebase products that you want to use
// import "firebase/auth";
// import "firebase/firestore";
// // Initialize Cloud Firestore through Firebase
// firebase.initializeApp(firebaseConfig);

// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireAuthModule } from '@angular/fire/auth';
// import { AngularFireStorageModule } from '@angular/fire/storage'
// import { AngularFireDatabaseModule } from '@angular/fire/database'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    // AngularFireModule.initializeApp(firebaseConfig), 
    // AngularFireAuthModule,
    // AngularFireStorageModule,
    // AngularFireDatabaseModule,
    // AngularFirestoreModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
