import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('board', params.board_id);
  },

  renderTemplate(controller, model) {
    model.get('lists').then(function(lists) {
      Ember.Logger.log(lists);
    });
    this.render("boards/show", {
      outlet: "main"
    });

    this.render("lists", {
      into: "boards",
      outlet: "lists",
      model: model
    });
  },
});
