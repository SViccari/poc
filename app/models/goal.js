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
      return get(this, 'user.monthlyDisposableIncome');
    }
  })
});
