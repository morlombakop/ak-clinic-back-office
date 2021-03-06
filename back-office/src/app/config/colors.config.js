/* eslint-disable quote-props */
/* @ngInject */
export default function colors(
  $mdThemingProvider,
) {
  $mdThemingProvider.definePalette('appPalette', {
    '50': 'ffebee',
    '100': 'ffcdd2',
    '200': 'ef9a9a',
    '300': 'e57373',
    '400': 'ef5350',
    '500': '18BC9C',
    '600': '15A589',
    '700': 'd32f2f',
    '800': 'c62828',
    '900': 'b71c1c',
    'A100': 'ff8a80',
    'A200': '15A589',
    'A400': 'ff1744',
    'A700': 'd50000',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': ['50', '100', '200', '300', '400', 'A100'],
    'contrastLightColors': undefined,
  });

  $mdThemingProvider.theme('default')
    .primaryPalette('appPalette')
    .accentPalette('appPalette');
}
