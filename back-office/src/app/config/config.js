import enGB from 'resources/languages/en-GB.json';

export default function config(
  $compileProvider,
  $locationProvider,
  $mdDateLocaleProvider,
  $provide,
  $translateProvider,
) {
  // Angular Material fix for not supporting $onInit()
  $compileProvider.preAssignBindingsEnabled(true);

  // The following line enables / disables Angular scope debugging
  // $compileProvider.debugInfoEnabled(false);
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false,
  });

  $translateProvider.translations('en_GB', enGB);
  $translateProvider.preferredLanguage('en_GB');
  $translateProvider.useSanitizeValueStrategy();
}
