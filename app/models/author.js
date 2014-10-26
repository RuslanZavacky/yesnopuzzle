import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  name: DS.attr('string'),
  surname: DS.attr('string'),
  questions: DS.hasMany('question'),
  comments: DS.hasMany('comment')
});