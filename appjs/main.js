(function() {

    var app = angular.module('PartAppUI',['ngRoute']);

    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.when('/parts', {
            templateUrl: 'pages/parts.html',
            controller: 'PartsController',
            controllerAs : 'partsCtrl'
        }).when('/partsdetails/:pid', {
            templateUrl: 'pages/partdetails.html',
            controller: 'PartsDetailController',
            controllerAs : 'partsDetailCtrl'
        }).when('/newpart', {
            templateUrl: 'pages/newpart.html',
            controller: 'NewPartController',
            controllerAs : 'newPartCtrl'
        }).otherwise({
            redirectTo: '/parts'
        });
    }]);
})();
