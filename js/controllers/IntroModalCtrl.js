app.controller('IntroModalCtrl', ['$scope', '$modalInstance', 'gameServices', function ($scope, $modalInstance, gameServices) {
    
    $scope.instructions = gameServices.getGameType("instructions");
    $scope.name = gameServices.getGameType("name");
    $scope.ok = function () {
        $modalInstance.close();
    };
    
}]);