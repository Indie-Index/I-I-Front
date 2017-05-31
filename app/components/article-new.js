import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['form-group'],
  actions: {
    save() {
      this.sendAction('save', this.get('article'));
    },
    cancel() {
      this.sendAction('cancel');
    },
  },
});
