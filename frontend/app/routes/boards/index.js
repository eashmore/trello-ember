import Ember from 'ember';

export default Ember.Route.extend({
    boards() {
      return this.modelFor('board');
    }
});
