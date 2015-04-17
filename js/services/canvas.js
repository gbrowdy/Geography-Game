app.factory('canvas', ['countryData', function(countryData) {
    
    var flag = document.createElement("IMG");
    flag.src = "img/flags_spritesheet.png";

    var libyaFlag = document.createElement("IMG");
    libyaFlag.src = "img/libya.png";

    var southSudanFlag = document.createElement("IMG");
    southSudanFlag.src = "img/south_sudan.png";

    var peruFlag = document.createElement("IMG");
    peruFlag.src = "img/peru_flag.png";
        
    var preload = function () {};
    
    var drawFlag = function (context, country) {
        var flagX = (country + 15) % 15 * 120; // move over 120px each number, reset to 0 at 15
        var flagY = Math.floor(country / 15) * 60; // move down 60px each 15

        // flags that are not in the spritesheet or are incorrect are
        // dealt with here
        if (countryData.countries[country].Name == "Libya")
        {
            context.drawImage(libyaFlag, 0, 0, 120, 60);
        }
        else if (countryData.countries[country].Name == "South Sudan")
        {
            context.drawImage(southSudanFlag, 0, 0, 120, 60);
        }
        else if (countryData.countries[country].Name == "Peru")
        {
            context.drawImage(peruFlag, 0, 0, 120, 60);
        }
        // draws the flag calculated above from the spritesheet
        else
        {
            context.drawImage(flag, flagX, flagY, 120, 60, 0, 0, 120, 60);
        }

        // creates a black border around the flag 
        // except for the strange Nepalese flag
        if (countryData.countries[country].Name != "Nepal")
        {
            context.rect(0, 0, 120,60);
            context.stroke();
        }
    };
    
    return {
        drawFlag: drawFlag,
        preload: preload
    };
        
}]);