import Ember from 'ember';
import layout from '../templates/components/aria-switch';

const {
  computed,
  Component
} = Ember;

export default Component.extend({
  layout,
  checked: false,
  dataAction: 'aria-switch',
  offLabel: 'Off',
  onLabel: 'On',
  role: 'switch',
  type: 'button',
  tagName: 'button',
  attributeBindings: [
    'ariaChecked:aria-checked',
    'ariaLabel:aria-label',
    'ariaLabelledBy:aria-labelledby',
    'dataAction:data-action',
    'dataKeepDisabled:data-keep-disabled',
    'disabled',
    'role',
    'type',
  ],
  ariaLabel: computed.reads('label'),
  dataKeepDisabled: computed.reads('disabled'),
  ariaChecked: computed('checked', function() {
    return this.get('checked') ? "true" : "false";
  }),
  click() {
    this.toggleProperty('checked');
    if(this.get('onToggle')) {
      this.get('onToggle')(this.get('checked'));
    }
  }
});
