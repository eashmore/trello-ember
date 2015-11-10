import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitBoard(boardTitle){
      if (boardTitle) {
        this.sendAction('action', boardTitle);
      }

      this.set("boardTitle", "");
    }
  }
});
