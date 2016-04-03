import Ember from 'ember';
import DS from 'ember-data';

const {
  computed,
  get
} = Ember;

const {
  Model,
  hasMany,
  attr,
} = DS;

export default Model.extend({
  goals: hasMany('goals', { async: true }),
  monthlyDisposableIncome: attr('number')
});
