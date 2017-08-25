import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toggleCallback(toggleValue) {
      let val = toggleValue ? "ON" : "OFF";
      alert(`ARIA Switch: You turned me ${val}!`);
    }
  }
});
