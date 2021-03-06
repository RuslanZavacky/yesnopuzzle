import Ember from 'ember';

export default Ember.ObjectController.extend({
  isAnswerCorrect: function() {
    return this.get('answer') === 'yes';
  }.property('answer'),

  isAnswerIncorrect: function() {
    return this.get('answer') === 'no';
  }.property('answer'),

  isAnswerWaiting: function() {
    return this.get('answer') === null;
  }.property('answer')
});
