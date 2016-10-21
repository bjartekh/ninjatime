angular.module( 'ngBoilerplate.music', [
    'ui.router',
    'placeholders',
    'ui.bootstrap'
])

    .config(function config( $stateProvider ) {
        $stateProvider.state( 'music', {
            url: '/music',
            views: {
                "main": {
                    controller: 'MusicCtrl',
                    templateUrl: 'music/music.tpl.html'
                }
            },
            data:{ pageTitle: 'Music' }
        });
    })

    .controller( 'MusicCtrl', function MusicCtrl( $scope ) {
        // This is simple a demo for UI Boostrap.
    })

;
