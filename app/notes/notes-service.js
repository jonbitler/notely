(function(){
  angular.module('notely.notes.service', [])
    .service('notes', notesService);

    notesService['$inject'] = ['$http', '$filter', '$state'];
    function notesService($http, $filter, $state){
      var notes = [];
      var nevernoteBasePath = 'https://nevernote-1150.herokuapp.com/api/v1/';
      var user = {
        apiKey: '$2a$10$hvXgKJUofHid2TJ0O38kHO3aDxCjgIvzqvH09GEhWACiZ/YzZl5yu'

      }

      this.all = function(){
        return notes;
      }

      this.findById = function(noteId) {
        return ($filter('filter')(notes, { id: parseInt(noteId) }, true)[0] || {});
      }

      this.update = function(note) {

        $http.put(nevernoteBasePath + 'notes/' + note.id, {
          api_key: user.apiKey,
          note: {
            title: note.title,
            body_html: note.body_html
          }

        })
        .success(function(noteData){
          debugger;
          console.log(noteData);
        });
      }

      this.create = function(note) {

          $http.post(nevernoteBasePath + 'notes', {
            api_key: user.apiKey,
            note: {
              title: note.title,
              body_html: note.body_html
            }

          })
          .success(function(noteData){
            notes.unshift(noteData.note); //adds to beginning of array
            $state.go('notes.form', {noteId: noteData.note.id});
          });

      }

      this.fetchNotes = function(callback){

        $http.get(nevernoteBasePath + 'notes?api_key=' + user.apiKey)
          .success(function(notesData){
            notes = notesData;

            if(callback) {
              callback(notes);
            }

          });

        return notes;

      };


    }


})();
