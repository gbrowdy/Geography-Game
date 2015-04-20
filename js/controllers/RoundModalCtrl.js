app.controller('RoundModalCtrl', function ($scope, $modalInstance, points, totalPoints, round, correct) {
   
   $scope.points = points;
   $scope.totalPoints = totalPoints;
   $scope.round = round;
   $scope.correct = correct;
   
   
   $scope.ok = function () {
       $modalInstance.close();
   };
    
});


