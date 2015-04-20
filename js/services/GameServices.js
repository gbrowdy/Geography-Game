app.factory('gameServices', [function() {
    
    var gameType;
    var gameRound;
    var time;
    var timer;
    var totalPoints = 0;
    var totalCorrect = 0;
    var gameOptions = [
            {
                name: 'Flag to Country',
                choice: 'Name',
                canvas: {
                    title: true,
                    choice: false
                },
                instructions: {
                    title: "country's flag",
                    choice: "country's name"
                }
            },
            {
                name: 'Country to Flag',
                title: 'Name',
                canvas: {
                    title: false,
                    choice: true
                },
                instructions: {
                    title: "country's name",
                    choice: "country's flag"
                }                
            },
            {
                name: 'Capital to Country',
                title: "Capital",
                choice: "Name",
                instructions: {
                    title: "country's capital city",
                    choice: "country's name"
                }
            },
            {
                name: 'Country to Capital',
                title: "Name",
                choice: "Capital",
                instructions: {
                    title: "country's name",
                    choice: "country's capital city"
                }                
            }
        ];
        
    var setGameType = function (type) {
        gameType = type;
    };
    
    var getGameType = function(key) {        
        var value;
        gameOptions.forEach(function (type) {
          if (type.name == gameType)
              value = type[key];
        });
        return value;
    };
    
    var nextRound = function () {
        gameRound = gameRound + 1 || 1;
        return gameRound;
    };
    
    var newGame = function () {
        gameRound = 0;
        totalPoints = 0;
        totalCorrect = 0;
    };
    
    var startTimer = function () {
        time = new Date();
        timer = time.getTime();
    };
    
    var stopTimer = function () {
        time = new Date();
        var endTime = time.getTime();
        return (endTime-timer);
    }
    
    var updateTotalPoints = function (points) {
        totalPoints += points;
        return totalPoints;
    }
    
    var addCorrect = function (getCheck) {
        if (getCheck)
            return totalCorrect;
        else
            totalCorrect = totalCorrect + 1;
    }
    
    return {
        setGameType: setGameType,
        getGameType: getGameType,
        nextRound: nextRound,
        newGame: newGame,
        startTimer: startTimer,
        stopTimer: stopTimer,
        updateTotalPoints: updateTotalPoints,
        addCorrect: addCorrect,
        totalPoints: totalPoints,
        gameOptions: gameOptions,
        gameRound: gameRound
        
    };
        
}]);