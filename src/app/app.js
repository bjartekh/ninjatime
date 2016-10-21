angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'ngBoilerplate.music',
  'ngBoilerplate.support',
  'ui.router',
  'ezfb'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, ezfbProvider ) {
  $urlRouterProvider.otherwise( '/home' );
        ezfbProvider.setInitParams({
            appId: '386469651480295'
        });
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | NinjaMusicology' ;
    }
  });
})

;

