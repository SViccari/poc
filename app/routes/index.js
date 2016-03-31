import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('goal');
  },

  setupController(controller, model) {
    Ember.set(controller, 'goals', model);
  }
});
