angular.module('myModule.note.add', [])

.component('noteAddComponent', {
    templateUrl:'components/note/note-add/note-add-component.html',
    bindings: { 
        dateOptions: '<',
        openDate: '&',
        submitNote: '&'
    },
    require: {
        parent: '^^noteListComponent'
    },

    /**
     * Add/Update a note
     * 
     * @param {any} NoteService 
     */
    controller: function (NoteService) {
        var ctrl = this;
        
        ctrl.format = 'dd/MM/yyyy';
        ctrl.isOpen = false;
        ctrl.dateOptions = {minDate: new Date(),showWeeks:true};
        
       
        /**
         * Init the component and the field
         * if note is null, case add
         * else case update
         * 
         */
        ctrl.$onInit = function() {
            if(ctrl.parent.note!== null){
                ctrl.isUpdate = true;
                ctrl.parent.note.date = new Date(ctrl.parent.note.date);
                ctrl.note = ctrl.parent.note;
            }else{
                ctrl.isUpdate = false;
                ctrl.note = {};
                ctrl.note.date = new Date();
            }
        };

        /**
         * Submit a note update or add
         * And show list
         * 
         * @param {any} form 
         */
        ctrl.submitNote = function(form){
            if(form.$valid){
                var result = null;
                if(ctrl.isUpdate===true){
                    angular.extend({},ctrl.parent.notes);
                    result = NoteService.update(ctrl.note);
                }
                else{
                    ctrl.parent.notes.push(ctrl.note);
                    result = NoteService.add(ctrl.note);
                }
                
                if(result){
                    ctrl.parent.showNote = !ctrl.parent.showNote;
                }

            }
        };

        /**
         * Show date
         * 
         */
        ctrl.openDate = function(){
            ctrl.isOpen = true;
        };

        /**
         * Cancel a note, back list note
         * 
         */
        ctrl.cancelNote = function(){
            ctrl.note = {
                date: new Date(),
                text: ''
            };
            ctrl.parent.showNote = !ctrl.parent.showNote;
        };
        
    }
    
});