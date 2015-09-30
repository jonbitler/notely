(function(){
  angular.module('notely.login', [
    'ui.router'
  ])

  .config(loginConfig);

  loginConfig['$inject'] = ['$stateProvider'];

  function loginConfig($stateProvider) {
    $stateProvider

      .state('login', {
        url: '/login',
        templateUrl: '/login/login.html',
        controller: LoginController
      })
  }

  LoginController['$inject'] = ['$scope', '$state', 'login', 'CurrentUser'];
  function LoginController($scope, $state, login, CurrentUser) {
    $scope.user = {};

    $scope.login = function () {
      
      login.login($scope.user).success( function() {
        debugger;
        $state.go('notes.form');
      });

    }
  }

})();
