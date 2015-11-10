import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',

  actions: {
    showBoard(board) {
      this.sendAction('action', board.get('id'));
    }
  }
});
