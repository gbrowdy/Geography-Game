app.directive('drawMe', function(canvas) {
   return {
       restrict: 'A',
       link: function (scope, elem, attrs) {
           var context = elem[0].getContext('2d');
           var country = scope.item || scope.correctAnswer;
           canvas.drawFlag(context, country);
       }
   }; 
});


