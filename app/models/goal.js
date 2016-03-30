import DS from 'ember-data';

export default DS.Model.extend({
  disposableIncomePerMonth: DS.attr('number'),
  targetAmount: DS.attr('number'),
  targetDeadline: DS.attr('string'),
});
