import DS from 'ember-data';

const {
  Model,
  hasMany,
  attr,
} = DS;

export default Model.extend({
  goals: hasMany('goals', { async: true }),
  
  monthlyDisposableIncome: attr('number')
});
