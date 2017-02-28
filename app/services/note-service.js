angular.module('myModule.noteService', [])

.factory('NoteService', ['$http', function($http) {
    var noteService = {};
  
    noteService.get = function() {
        //Todo : Call url api
        return $http.get('../data/notes.json');
    };

    noteService.add = function(data) {
        //Todo : $http.post(url)... with data
        return true;
    };

    noteService.update = function(data) {
        //Todo : $http.push(url)... with data
        return true;
    };

    noteService.delete = function(data) {
        //Todo : $http.delete(url)... with data
        return true;
    };

  return noteService;
}]);