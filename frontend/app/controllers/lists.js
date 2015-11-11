import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createList(listTitle) {
      this.store.createRecord('list', {
        title: listTitle,
        boardId: 1,
        ord: 0
      }).save();
      // Ember.Logger.log('here');
    }
  }
});
