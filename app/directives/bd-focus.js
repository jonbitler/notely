
angular.module('notely')
  .directive('bdFocus',function() {
        return {
          restrict: 'A', //attribute
          link: function(scope, elem, attr) {
              elem.ready(function(){
                  elem[0].focus();
              });
          }
        };
  });
