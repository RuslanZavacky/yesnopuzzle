import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('puzzle', params.puzzle_id);
  }
});
