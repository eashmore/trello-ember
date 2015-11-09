import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitBoard(boardTitle){
      Ember.Logger.log('submit')
      if (boardTitle) {
        this.sendAction('action', boardTitle);
      }

      this.setProperties({ inputIsShown: false });
    }
  }
});
