import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('board', params.board_id);
  },

  renderTemplate(c, model) {
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
