app.controller('GameController', ['$scope', '$route', '$modal', '$location', 'countryData', 'optionServices', 'gameServices',
    function($scope, $route, $modal, $location, countryData, optionServices, gameServices) {
        
        $scope.countries = countryData.countries;
        $scope.correctAnswer = optionServices.setCorrectAnswer();
        $scope.title = gameServices.getGameType("title");
        $scope.choice = gameServices.getGameType("choice");
        $scope.canvas = gameServices.getGameType("canvas");
        $scope.round = gameServices.nextRound();
        gameServices.startTimer();
        $scope.options = optionServices.setOptions($scope.correctAnswer);
        $scope.correct = "Correct";
        $scope.correctStyle = {'visibility': 'hidden'};
        $scope.headerStyle = (window.innerWidth < 800) ? "h4" : "h1";
        $scope.buttonStyle = (window.innerWidth < 800) ? {"font-size":"4vw"} : "";
        $scope.isDisabled = false;
        
        if ($scope.round == 1) 
        {
            $modal.open({
                templateUrl: 'modals/IntroModal.html',
                controller: 'IntroModalCtrl'
            })
            .result.then(function() {
                gameServices.startTimer();
            }, function() {
                gameServices.startTimer();                
            });
        }
        
        var endModal = function () {
            $modal.open({
            templateUrl: 'modals/EndModal.html',
            controller: 'EndModalCtrl',
            resolve: {
                totalPoints: function () {return gameServices.updateTotalPoints(0);},
                totalCorrect: function () {return gameServices.addCorrect(true);}
            }
            })
            .result.then(function () {
                $location.url('/');
            }, function () {
                $location.url('/');
            });
        };
        
        $scope.click = function (index) {
           $scope.correct = optionServices.correctCheck(index);
           $scope.isDisabled = true;
           $scope.opacity = {"opacity":1};
           if ($scope.correct == "Correct")
               gameServices.addCorrect();
           $scope.timer = gameServices.stopTimer();
           $scope.points = ($scope.correct == "Incorrect") ? 0 :
                   (50 + (($scope.timer > 17000) ? 0 : 
                   (($scope.timer<2000) ? 150 : (150 - Math.round($scope.timer/100)+20))));
           $scope.totalPoints = gameServices.updateTotalPoints($scope.points);
            setTimeout(function () {
               $modal.open({
                   templateUrl: 'modals/RoundModal.html',
                   controller: 'RoundModalCtrl',
                   resolve: {
                       points: function () {return $scope.points;},
                       totalPoints: function () {return $scope.totalPoints;},
                       round: function () {return $scope.round;},
                       correct: function () {return $scope.correct;}
                   }
               })
               .result.then(function() {
                   if ($scope.round == 10)
                        endModal();
                   else
                        $route.reload();
               }, function() {
                   if ($scope.round == 10)
                        endModal();
                   else
                        $route.reload();
               });
           }, 1500);
        };
}]);