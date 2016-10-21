angular.module( 'ngBoilerplate.support', [
    'ui.router',
    'placeholders',
    'ui.bootstrap'
])

    .config(function config( $stateProvider ) {
        $stateProvider.state( 'support', {
            url: '/support',
            views: {
                "main": {
                    controller: 'SupportCtrl',
                    templateUrl: 'support/support.tpl.html'
                }
            },
            data:{ pageTitle: 'Support the project' }
        });
    })

    .controller( 'SupportCtrl', function SupportCtrl( $scope ) {
        // This is simple a demo for UI Boostrap.
    })

;
