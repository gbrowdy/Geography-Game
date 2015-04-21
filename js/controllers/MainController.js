app.controller('MainController', ['$scope', 'gameServices', 'canvas', 'optionServices', function($scope, gameServices, canvas, optionServices) {
        $scope.mainMenuButtons = gameServices.gameOptions;
        canvas.preload();
        gameServices.newGame();
        optionServices.resetOptions();
        $scope.setType = function (type) {
          gameServices.setGameType(type);  
        };
}]);


