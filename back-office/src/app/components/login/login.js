import angular from 'angular';
import LoginComponent from './login.component';

export default angular.module('login', [])
  .component('login', LoginComponent)
  .name;
