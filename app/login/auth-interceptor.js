(function(){
  angular.module('notely.login')
    .factory('AuthInterceptor', AuthInterceptor);
    //factories return something unlike services

    function AuthInterceptor() {
      return {
        request: function(config) {
            
            return config;
        }
      }
    }

    angular.module('notely')
      .config(function($httpProvider){
        return $httpProvider.interceptors.push('AuthInterceptor');
      });
})();
