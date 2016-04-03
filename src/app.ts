import {Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <router-outlet></router-outlet>
`
})

export class App {

  constructor() {

    //noinspection TypeScriptUnresolvedFunction
    var uuid = require('node-uuid');

    console.log('App called');
  }

}
