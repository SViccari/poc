import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user', { async: false}),

  name: DS.attr('string'),
  amount: DS.attr('number'),
  months: DS.attr('number')
});
