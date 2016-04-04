import Ember from 'ember';

const {
  Component,
  computed,
  get
} = Ember

export default Component.extend({
  
  totalMonthlyCost: computed('goals.@each.monthlyCost', {
    get() {
      return get(this, 'goals').mapBy('monthlyCost').reduce((previousValue, currentValue) => {
        return Number(previousValue) + Number(currentValue);
      }, 0);
    }
  }),

  overSpent: computed('totalMonthlyCost', 'user.monthlyDisposableIncome', {
    get() {
      return (get(this, 'totalMonthlyCost') > get(this, 'user.monthlyDisposableIncome'));
    }
  }),
});
