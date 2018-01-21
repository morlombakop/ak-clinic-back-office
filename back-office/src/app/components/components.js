import login from './login/login';

const componentModule = angular.module('app.components', [
  login,
])
  .name;
export default componentModule;
