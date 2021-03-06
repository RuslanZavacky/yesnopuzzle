import Ember from 'ember';

export default Ember.Controller.extend({
  question: null,

  errorMessage: null,

  actions: {
    reset: function() {
      this.set('question', null);
      this.set('errorMessage', null);
    }
  }
});
