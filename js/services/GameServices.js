app.factory('gameServices', [function() {
    
    var gameType;
    var gameRound = 1;
    var time;
    var timer;
    var gameOptions = [
            {
                name: 'Flag to Country',
                choice: 'Name',
                canvas: {
                    title: true,
                    choice: false
                }
            },
            {
                name: 'Country to Flag',
                title: 'Name',
                canvas: {
                    title: false,
                    choice: true
                }
            },
            {
                name: 'Capital to Country',
                title: "Capital",
                choice: "Name"  
            },
            {
                name: 'Country to Capital',
                title: "Name",
                choice: "Capital"
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
        gameRound = gameRound + 1;
        return gameRound;
    };
    
    var startTimer = function () {
        time = new Date();
        timer = time.getTime();
        console.log(timer);
    };
    
    var stopTimer = function () {
        time = new Date();
        var endTime = time.getTime();
        return (endTime-timer);
    }
    
    return {
        setGameType: setGameType,
        getGameType: getGameType,
        nextRound: nextRound,
        startTimer: startTimer,
        stopTimer: stopTimer,
        gameOptions: gameOptions,
        gameRound: gameRound
    };
        
}]);