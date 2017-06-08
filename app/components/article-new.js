import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    save() {
      this.sendAction('save', this.get('article'));
    },
    cancel() {
      this.sendAction('cancel');
    },
  },
});
