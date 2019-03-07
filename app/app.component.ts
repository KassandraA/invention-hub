import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor () {}
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyArSEg-p8wQP4NVFY3h3lSMv9f6lF5Rl0c',
      authDomain: 'inventions-hub-ks.firebaseapp.com',
    });
  }
}
