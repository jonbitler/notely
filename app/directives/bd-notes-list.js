angular.module('notely')
  .directive('bdNotesList', function(){
    return {
      restrict: 'E',
      replace: true,
      scope: {},
      templateUrl: '/notes/notesList.html',
      controller: NotesListController,
      controllerAs: 'ctrl'

    };

    NotesListController['$inject'] = ['notes']
    function NotesListController(notes) {
      this.notes = notes.all();

    }

});
