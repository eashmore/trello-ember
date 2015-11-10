import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    showInput() {
      this.setProperties({ inputIsShown: true });
    }
  }
});
