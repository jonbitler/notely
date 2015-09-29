(function() {
  angular.module('notely.notes', [
    'ui.router'
  ])
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
          templateUrl: '/notes/notes-form.html',
          controller: NotesFormController
        });
    }

    NotesController['$inject'] = ['$scope', '$state', 'notes'];
    function NotesController($scope, $state, notes) {
      notes.fetchNotes(function(notes){
        // console.log('Callback');
        $scope.notes = notes;

      });

    }

    NotesFormController['$inject'] = ['$scope', '$state', 'notes'];
    function NotesFormController($scope, $state, notes) {

      $scope.note = notes.findById($state.params.noteId);

      $scope.save = function(){
        if ($scope.note.id){
          notes.update($scope.note);
        }
        else {
          notes.create($scope.note);
          
        }

      }

    }

})();
