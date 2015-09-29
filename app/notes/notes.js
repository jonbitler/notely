(function() {
  angular.module('notely.notes', [
    'ui.router'
  ])
    .controller('NotesController', NotesController)
    .config(notesConfig);

    notesConfig['$inject'] = ['$stateProvider'];

    function notesConfig($stateProvider) {
      $stateProvider

        .state('notes', {
          url: '/notes',
          abstract: true, //can't really go here, only exists for the children
          templateUrl: '/notes/notes.html',
          controller: NotesController
        })

        .state('notes.form', {
          url: '/:noteId',
          templateUrl: '/notes/notes-form.html'
        });
    }

    NotesController['$inject'] = ['$scope', '$state', 'notes'];
    function NotesController($scope, $state, notesService) {
      notesService.fetchNotes(function(notes){
        console.log('Callback');

        $scope.notes = notes;

      });
      
    }


})();
