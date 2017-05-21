import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  overview: DS.attr('string'),
  body: DS.attr('string'),
  created_at: DS.attr('datetime'),
  user_id: DS.attr('integer')
});
