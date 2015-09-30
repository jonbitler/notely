(function(){
  angular.module('notely.login')
    .service('AuthToken', AuthToken);

    AuthToken['$inject'] = ['$window'];

    function AuthToken($window) {
      var authToken = $window.localStorage.getItem('authToken');;

      this.set = function(token){
        authToken = token;
        $window.localStorage.setItem('authToken', token);
      }

      this.get = function() {
        return authToken;
      }

    }

})();
