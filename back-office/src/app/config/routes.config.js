/* @ngInject */
export default function route(
  $urlRouterProvider,
  $urlMatcherFactoryProvider,
  $stateProvider,
) {
  'ngInject';

  $urlRouterProvider.otherwise('/login');

  // Map routes with trailing slash to routes without trailing slash
  $urlMatcherFactoryProvider.strictMode(false);

  $stateProvider
    .state('login', {
      url: '/login',
    })
    .state('home', {
      url: '/home',
      component: 'main',
    });
}
