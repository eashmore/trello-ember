import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var TrelloClone;

Ember.MODEL_FACTORY_INJECTIONS = true;

TrelloClone = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(TrelloClone, config.modulePrefix);

export default TrelloClone;
