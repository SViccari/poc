import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      goals: this.store.findAll('goal'),
      user: this.store.findRecord('user', '1'),
    });
  },

  setupController(controller, model) {
   Ember.set(controller, 'goals', model.goals);
   Ember.set(controller, 'user', model.user);
  }
});
