app.factory('optionServices', ['countryData', function(countryData) {

    var correctAnswer;
    var answerPosition;
    var options = [];
    var possibleOptions = [];
    for (var i=0; i<countryData.countries.length; i++)
    {
        possibleOptions.push(i);
    }
    
    var shuffle = function(array) {
        var currentIndex = array.length, temporaryValue, randomIndex ;

          // While there remain elements to shuffle...
          while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }

          return array;  
    };
    
    
    var setCorrectAnswer = function () {
        shuffle(possibleOptions);
        correctAnswer = possibleOptions[0];
        possibleOptions.shift();
        return correctAnswer;
        
    };
    
    var resetOptions = function () {
        possibleOptions = [];
        for (var i=0; i<countryData.countries.length; i++)
        {
            possibleOptions.push(i);
        }
    };
    
    var setOptions = function (answer) {
        var numberList = [];
        options = [answer];

        for (var i=0; i<countryData.countries.length; i++)
        {
            numberList.push(i);
        }
        
        numberList.splice(answer, 1);
        shuffle(numberList);
        options = options.concat(numberList.slice(0,3));
       
       answerPosition = Math.floor(Math.random()*4)+1;
       options.splice(answerPosition, 0, options[0]);
       options.shift();

       return options;
    };
    
    var correctCheck = function (check) {
        var buttonClicked = document.getElementById("option" + check) 
        var canvasButtonClicked = document.getElementById("canvas" + check);
        var checkAgainst = countryData.countries[options[check]].Name;
        document.getElementById("option"+(answerPosition-1)).classList.add('btn-success');
        document.getElementById("canvas"+(answerPosition-1)).classList.add("btn-success");
        
        if (checkAgainst == countryData.countries[correctAnswer].Name)
        {
            return "Correct";
        }
        else
        {
            buttonClicked.classList.add("btn-danger");
            canvasButtonClicked.classList.add("btn-danger");
            
            return "Incorrect";
        }
    };

    return {
        setOptions: setOptions,
        setCorrectAnswer: setCorrectAnswer,
        correctCheck: correctCheck,
        resetOptions: resetOptions
    };
        
}]);


