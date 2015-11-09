import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('board');
  },

  actions: {
    createBoard(boardTitle) {
      Ember.Logger.log('create')

      this.store.createRecord('board', {
        title: boardTitle,
        user_id: window.CURRENT_USER_ID
      }).save();
    }
  }
});
