(function() {
  angular.module('notely')
    .directive('bdFocusOn',function() {
          return function(scope, elem, attr) {
            scope.$on(attr.bdfocusOn, function(e) {
              elem[0].focus();
            });
          }
    });
})();
