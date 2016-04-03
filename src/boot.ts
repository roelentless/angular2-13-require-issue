import {bootstrap}    from 'angular2/platform/browser'
import {App} from './app'

bootstrap(App)
  .catch(function(err) {
    console.error(err);
  })
;
