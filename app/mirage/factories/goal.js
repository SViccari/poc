import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  'name'() {
    return 'Retirement Goal';
  },
  'amount'() {
    return 100;
  },
  'months'() {
    return 12;
  }
});
