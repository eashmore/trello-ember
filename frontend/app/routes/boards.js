import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('board');
  },

  actions: {
    createBoard(boardTitle) {
      this.store.createRecord('board', {
        title: boardTitle,
        user_id: window.CURRENT_USER_ID
      }).save();
    },

    toShow(id) {
      this.transitionTo('/boards/' + id);
    }
  }
});
