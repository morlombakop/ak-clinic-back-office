/* eslint-disable no-param-reassign, angular/on-watch  */
/* @ngInject */
export default function run(
  $rootScope,
) {
  $rootScope.userProfilePicture = 'App/Images/default-profile-pic-small.jpg';
  $rootScope.stateIsLoading = false;

  $rootScope.$on('$stateChangeStart', () => {
    $rootScope.stateIsLoading = true;
  });

  $rootScope.$on('$stateChangeSuccess', () => {
    $rootScope.stateIsLoading = false;
  });

  $rootScope.$on('$stateChangeError', () => {});
}
