import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createList(listTitle, pKey) {
      var newList = this.store.createRecord('list', {
        title: listTitle,
        board_id: pKey,
        ord: 0
      });
      newList.save();

      this.store.findRecord('board', newList.get('boardId'))
        .get('lists').pushObject(newList);
    }
  }
});
