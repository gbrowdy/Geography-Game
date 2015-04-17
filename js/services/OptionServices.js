app.factory('optionServices', ['countryData', function(countryData) {

    var correctAnswer;
    var answerPosition;
    var options = [];

    var setCorrectAnswer = function () {
        correctAnswer = Math.floor(Math.random()*countryData.countries.length);
        return correctAnswer;
    };

    var setOptions = function (answer) {
        var numberList = [];
        options = [answer];

        for (var i=0; i<countryData.countries.length; i++)
        {
            numberList.push(i);
        }

        for (var i=0; i<3; i++)
        {
            var newNumber = Math.floor(Math.random()*numberList.length);
            options.push(newNumber);
            numberList.splice(newNumber,0);
        }
       
       answerPosition = Math.floor(Math.random()*4)+1
       options.splice(answerPosition, 0, options[0]);
       options.shift();

       return options;
    };
    
    var correctCheck = function (check) {
        var buttonClicked = document.getElementById("option" + check);
        var checkAgainst = countryData.countries[options[check]].Name;
        document.getElementById("option"+(answerPosition-1)).classList.add('btn-success');
        if (checkAgainst == countryData.countries[correctAnswer].Name)
        {
            return "Correct";
        }
        else
        {
            buttonClicked.classList.add("btn-danger");
            return "Incorrect";
        }
    };

    return {
        setOptions: setOptions,
        setCorrectAnswer: setCorrectAnswer,
        correctCheck: correctCheck
    };
        
}]);


