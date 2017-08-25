import Ember from 'ember';
import layout from '../templates/components/aria-switch';

const {
  computed,
  Component
} = Ember;

export default Component.extend({
  layout,
  tagName: 'button',
  attributeBindings: [
    'ariaChecked:aria-checked',
    'role',
    'dataAction:data-action',
    'type',
    'ariaLabel:aria-label',
    'disabled',
    'dataKeepDisabled:data-keep-disabled',
    'ariaLabelledBy:aria-labelledby'
  ],
  type: 'button',
  ariaLabel: computed.reads('label'),
  ariaChecked: computed('checked', function() {
    return this.get('checked') ? "true" : "false";
  }),
  checked: false,
  dataKeepDisabled: computed.reads('disabled'),
  role: 'switch',
  dataAction: 'aria-switch',
  click() {
    this.toggleProperty('checked');
  }
});
