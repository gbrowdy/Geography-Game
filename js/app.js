var app = angular.module("GeoGame", ['ngRoute']);
app.config(function ($routeProvider) {
   $routeProvider
           .when('/', {
                controller: 'MainController',
                templateUrl: 'views/mainView.html'
            })
            .when('/game/:id', {
                controller: 'GameController',
                templateUrl: 'views/gameView.html'
            })
            .otherwise({
                redirectTo: "/"
            });
});


