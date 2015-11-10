import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitObj(objTitle){
      if (objTitle) {
        this.sendAction("action", objTitle);
      }

      this.set("objTitle", "");
    }
  }
});
