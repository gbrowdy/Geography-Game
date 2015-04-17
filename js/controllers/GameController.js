app.controller('GameController', ['$scope', 'countryData', 'optionServices', 'gameServices', 'canvas',
    function($scope, countryData, optionServices, gameServices, canvas) {
        
        $scope.countries = countryData.countries;
        $scope.correctAnswer = optionServices.setCorrectAnswer();
        $scope.title = gameServices.getGameType("title");
        $scope.choice = gameServices.getGameType("choice");
        $scope.canvas = gameServices.getGameType("canvas");
        $scope.round = gameServices.gameRound;
        gameServices.startTimer();
        $scope.options = optionServices.setOptions($scope.correctAnswer);
                
//        $scope.correct = "Correct";
//        $scope.correctStyle = {'visibility': 'hidden'};
       
        $scope.click = function (index) {
           $scope.correct = optionServices.correctCheck(index);
           $scope.round = gameServices.nextRound();
           $scope.timer = gameServices.stopTimer();
           $(document).ready(function() {
               $("#myModal").modal('show');    
           });
//           $scope.correctStyle = {'visibility': 'visible'};
            $(document).ready(function () {
                $("#myModal").on('hidden.bs.modal', function(e) {
                    $scope.$apply(function () {
                        $scope.correctAnswer = optionServices.setCorrectAnswer();
                        $scope.options = optionServices.setOptions($scope.correctAnswer);
                        gameServices.startTimer();
                    });
                });
            });
        };
}]);