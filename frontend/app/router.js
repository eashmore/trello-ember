import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('boards', { path: '/' }, function() {
    this.route('show', { path: '/boards/:board_id'}, function() {
      this.route('lists');
    });
  });
});

export default Router;
