import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitObj(objTitle, pKey){
      if (objTitle) {
        this.sendAction("action", objTitle, pKey);
      }

      this.set("objTitle", "");
    }
  }
});
