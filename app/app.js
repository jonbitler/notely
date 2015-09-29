(function() {
  var app = angular.module('notely', [
    'ui.router',
    'notely.notes',
    'notely.notes.service'
  ]);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/notes/');

  }

  //more like angular 2
  //should always do this manually instead of ng-annotate
  config['$inject'] = ['$urlRouterProvider'];
  app.config(config);
})();
