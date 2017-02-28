angular.module('myModule.note', [])

.component('noteComponent', {
    templateUrl:'components/note/note/note-component.html',
    bindings: { 
        note: '=',
        updateNote: '&'
    },
    require: {
        parent: '^^noteListComponent'
    },

    /**
     * Componenent note
     * 
     */
    controller: function (NoteService, $attrs, $element) {
        var ctrl = this;
        /**
         * Show component update note
         * 
         */
        ctrl.updateNote = function(){
            ctrl.parent.note = ctrl.note;
            ctrl.parent.showNote = true;
        };

        /**
         * Delete note
         * 
         * @param {any} note 
         */
        ctrl.deleteNote = function(note){
            NoteService.delete(note);
            var index = ctrl.parent.notes.indexOf(note);
            ctrl.parent.notes.splice(index, 1);
        };

        /**
         * Init component
         * 
         */
        ctrl.$onInit = function() {
            ctrl.note.date = new Date(ctrl.note.date);
        };
    }
    
    

});