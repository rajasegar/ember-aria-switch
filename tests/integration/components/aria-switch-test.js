import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('aria-switch', 'Integration | Component | aria switch', {
  integration: true
});

test('it should render a button element', function(assert) {
  this.render(hbs`{{aria-switch}}`);
  assert.equal(this.$('button').length, 1);
});

test('it should render two toggle elements', function(assert) {
  this.render(hbs`{{aria-switch}}`);
  assert.equal(this.$('span').length, 2);
});


test('it should have a type attribute set to button ', function(assert) {
  this.render(hbs`{{aria-switch}}`);
  assert.equal(this.$('button').attr('type'), "button");
});

test('it should have a role attribute set to switch ', function(assert) {
  this.render(hbs`{{aria-switch}}`);
  assert.equal(this.$('button').attr('role'), "switch");
});

test('it should have a data-action attribute set to aria-switch ', function(assert) {
  this.render(hbs`{{aria-switch}}`);
  assert.equal(this.$('button').data('action'), "aria-switch");
});

test('it should have a default aria-checked state as false ', function(assert) {
  this.render(hbs`{{aria-switch}}`);
  assert.equal(this.$('button').attr('aria-checked'), "false");
});

test('it should have a default aria-checked state as given ', function(assert) {
  this.render(hbs`{{aria-switch checked=true}}`);
  assert.equal(this.$('button').attr('aria-checked'), "true");
});

test('it should toggle the aria-checked ', function(assert) {
  this.render(hbs`{{aria-switch}}`);
  assert.equal(this.$('button').attr('aria-checked'), "false");
  this.$('button').click();
  assert.equal(this.$('button').attr('aria-checked'), "true");
});

test('it should have a disabled state if specified ', function(assert) {
  this.render(hbs`{{aria-switch disabled=true}}`);
  assert.equal(this.$('button').attr('disabled'), "disabled");
  assert.equal(this.$('button').attr('data-keep-disabled'), "");
});

test('it should have an aria-label ', function(assert) {
  this.render(hbs`{{aria-switch label="My Aria Label"}}`);
  assert.equal(this.$('button').attr('aria-label'), "My Aria Label");
});

test('it should have an ON label as given ', function(assert) {
  this.render(hbs`{{aria-switch onLabel="Yes"}}`);
  assert.equal(this.$('span')['0'].textContent.trim(), "Yes");
});

test('it should have an OFF label as given ', function(assert) {
  this.render(hbs`{{aria-switch offLabel="No"}}`);
  assert.equal(this.$('span')['1'].textContent.trim(), "No");
});
