app.controller('EndModalCtrl', function ($scope, $modalInstance, totalPoints, totalCorrect) {
   
   
   $scope.totalPoints = totalPoints;
   $scope.totalCorrect = totalCorrect;
   
   
   $scope.ok = function () {
       $modalInstance.close();
   };
    
});


