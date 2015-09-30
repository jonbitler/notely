angular.module('notely')
  .directive('bdNotesList', function(notes){
    return {
      restrict: 'E',
      replace: true,
      scope: {},
      templateUrl: '/notes/notesList.html',
      controller: NotesListController,
      controllerAs: 'ctrl'

    };

    //NotesListController['$inject'] = ['notes']
    function NotesListController() {
      this.notes = notes.all();

    }

});
