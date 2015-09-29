(function(){
  angular.module('notely.notes.service', [])
    .service('notes', notesService);

    notesService['$inject'] = ['$http'];
    function notesService($http){
      var notes = [];
      var nevernoteBasePath = 'https://nevernote-1150.herokuapp.com/api/v1/';
      var user = {
        apiKey: '$2a$10$hvXgKJUofHid2TJ0O38kHO3aDxCjgIvzqvH09GEhWACiZ/YzZl5yu'

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
