import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    toggleCallback(toggleValue) {
      let val = toggleValue ? "ON" : "OFF";
      alert(`ARIA Switch: You turned me ${val}!`);
    }
  }
});
