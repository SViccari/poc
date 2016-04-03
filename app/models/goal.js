import Ember from 'ember';
import DS from 'ember-data';

const {
  computed,
  get
} = Ember;

const {
  Model,
  attr,
  belongsTo,
} = DS;

export default Model.extend({
  user: belongsTo('user', { async: true }),

  name: attr('string'),
  amount: attr('number'),
  months: attr('number'),

  monthlyCost: computed('user', 'amount', 'months', {
    get() {
      const amount = get(this, 'amount');
      const months = get(this, 'months');
      return (amount / months).toFixed(2);
    }
  })
});
