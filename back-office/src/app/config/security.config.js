/* eslint-disable angular/document-service */
/* @ngInject */
export default function security(
  $urlRouterProvider,
  $sceDelegateProvider
) {
  'ngInject';

  const getDomain = () => {
    const a = document.createElement('a');
    a.href = 'APP_URL';
    return a.hostname;
  };

  $sceDelegateProvider.resourceUrlWhitelist(
    [
      'self',
      new RegExp(`.*${getDomain()}.*`),
    ]
  );
}
