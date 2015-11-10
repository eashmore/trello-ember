import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',

  actions: {
    showObj(obj) {
      this.sendAction('action', obj.get('id'));
    }
  }
});
