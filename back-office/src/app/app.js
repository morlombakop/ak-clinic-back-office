/* eslint-disable */
import 'normalize.css';
import angular from 'angular';
import 'angular-translate'; // Needs Angular to be loaded first.
import 'angular-translate-once';
import angularMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import uiRouter from 'angular-ui-router';
import 'angular-messages';

import AppComponent from './app.component';
import Constants from './config/constants.config'
// import Common from './common/common';
import Components from './components/components';
import Config from './config/config';
import Colors from './config/colors.config';
import Security from './config/security.config';
import Routes from './config/routes.config';
import Run from './config/run.config';
// import Services from './services/services';
// import Filters from './filters';


// import '../robots.txt';

export default angular.module('app', [
  angularMaterial,
  // Common,
  Components,
  // Filters,
  ngAnimate,
  'ngMessages',
  'pascalprecht.translate',
  // Services,
  uiRouter,
])
.constant('Constants', Constants)
.config(Colors)
.config(Config)
.config(Routes)
.config(Security)
.component('app', AppComponent)
.run(Run)
.name;
