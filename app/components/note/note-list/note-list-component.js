angular.module('myModule.note.list', [
    
])

.component('noteListComponent', {
    templateUrl:'components/note/note-list/note-list-component.html',
    bindings: { 
        notes: '@',
        onShowNote: '&',
    },

    /**
     * Component list note
     * 
     * @param {any} NoteService 
     */
    controller: function (NoteService) {
        var ctrl = this;
        ctrl.showNote = false;
        ctrl.showUpdateNote = false;

        /**
         * Get list notes
         * 
         */
        function getNotes (){
            ctrl.notes = NoteService.get().then(function(response){
                ctrl.notes = response.data;
            });
        }

        /**
         * Show componentnote
         * 
         */
        ctrl.onShowNote = function  (){
            ctrl.showNote = !ctrl.showNote;
            ctrl.note = null;
        };
        
        /**
         * Init component
         * 
         */
        ctrl.$onInit = function() {
            getNotes();
        };
    }
    
});