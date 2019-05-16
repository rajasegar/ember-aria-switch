import { render, find, click, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

module('Integration | Component | aria switch', function(hooks) {
  setupRenderingTest(hooks);

test('it should render a button element', async function(assert) {
  await render(hbs`{{aria-switch}}`);
  assert.equal(this.element.querySelectorAll('button').length, 1);
});

test('it should render two toggle elements', async function(assert) {
  await render(hbs`{{aria-switch}}`);
  assert.equal(findAll('span').length, 2);
});


test('it should have a type attribute set to button ', async function(assert) {
  await render(hbs`{{aria-switch}}`);
  assert.equal(find('button').getAttribute('type'), "button");
});

test('it should have a role attribute set to switch ', async function(assert) {
  await render(hbs`{{aria-switch}}`);
  assert.equal(find('button').getAttribute('role'), "switch");
});

test('it should have a data-action attribute set to aria-switch ', async function(assert) {
  await render(hbs`{{aria-switch}}`);
  assert.equal(find('button').getAttribute('data-action'), "aria-switch");
});

test('it should have a default aria-checked state as false ', async function(assert) {
  await render(hbs`{{aria-switch}}`);
  assert.equal(find('button').getAttribute('aria-checked'), "false");
});

test('it should have a default aria-checked state as given ', async function(assert) {
  await render(hbs`{{aria-switch checked=true}}`);
  assert.equal(find('button').getAttribute('aria-checked'), "true");
});

test('it should toggle the aria-checked ', async function(assert) {
  await render(hbs`{{aria-switch}}`);
  assert.equal(find('button').getAttribute('aria-checked'), "false");
  await click('button');
  assert.equal(find('button').getAttribute('aria-checked'), "true");
});

test('it should have a disabled state if specified ', async function(assert) {
  await render(hbs`{{aria-switch disabled=true}}`);
  assert.equal(find('button').disabled, true);
  assert.equal(find('button').getAttribute('data-keep-disabled'), "");
});

test('it should have an aria-label ', async function(assert) {
  await render(hbs`{{aria-switch label="My Aria Label"}}`);
  assert.equal(find('button').getAttribute('aria-label'), "My Aria Label");
});

test('it should have an ON label as given ', async function(assert) {
  await render(hbs`{{aria-switch onLabel="Yes"}}`);
  assert.equal(findAll('span')['0'].textContent.trim(), "Yes");
});

test('it should have an OFF label as given ', async function(assert) {
  await render(hbs`{{aria-switch offLabel="No"}}`);
  assert.equal(findAll('span')['1'].textContent.trim(), "No");
});

test('it should invoke the onToggle callback once clicked', async function(assert) {
  this.set('result', '');
  this.set('toggleCallback', function(toggleValue) {
    let value = toggleValue ? "ON" : "OFF";
    this.set('result', value);
  });

  await render(hbs`{{aria-switch onToggle=(action toggleCallback)}}
                  <div id="result">{{result}}</div>`);

  await click('button');
  assert.equal(find('#result').textContent.trim(), "ON");
  await click('button');
  assert.equal(find('#result').textContent.trim(), "OFF");
});

});
