import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showObj(obj) {
      this.sendAction('action', obj.get('id'));
    }
  }
});
