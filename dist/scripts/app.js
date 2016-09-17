(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });

        $stateProvider
            .state('index',{
            url: '/',
            controller: 'homeCtrl as home',
            templateUrl: '/templates/home.html'
        });
    }

angular
    .module('tittleTattle', ['ui.router', 'firebase', 'ui.bootstrap'])
    .config(config);
})();
