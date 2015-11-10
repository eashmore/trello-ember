import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showObj(obj) {
      this.sendAction('action', obj.get('id'));
    },

    print(model) {
      Ember.Logger.log(model.get('lists'));
    }
  }
});
