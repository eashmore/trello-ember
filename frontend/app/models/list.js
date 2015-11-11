import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  board_id: DS.attr('number'),
  ord: DS.attr('number')
});
