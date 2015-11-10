import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  boardId: DS.attr('number'),
  ord: DS.attr('number'),
  cards: DS.hasMany('card')
});
