app.controller('MainController', ['$scope', 'gameServices', 'canvas', function($scope, gameServices, canvas) {
        $scope.mainMenuButtons = gameServices.gameOptions;
        canvas.preload();
        gameServices.newGame();
        $scope.setType = function (type) {
          gameServices.setGameType(type);  
        };
}]);


