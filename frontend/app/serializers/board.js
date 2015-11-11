import DS from 'ember-data';
// import Ember from 'ember';


export default DS.JSONAPISerializer.extend(DS.EmbeddedRecordsMixin, {
  // normalize: function(cklass, hash, prop) {
  //   Ember.Logger.log(cklass);
  //   Ember.Logger.log(hash);
  //   Ember.Logger.log(prop);
  //
  // },
  attrs: {
    lists: { embedded: 'always' }
  }
});
