# ember-aria-switch

[![Build Status](https://travis-ci.org/rajasegar/ember-aria-switch.svg?branch=master)](https://travis-ci.org/rajasegar/ember-aria-switch) 
[![Coverage Status](https://coveralls.io/repos/github/rajasegar/ember-aria-switch/badge.svg?branch=master)](https://coveralls.io/github/rajasegar/ember-aria-switch?branch=master)
[![npm](https://img.shields.io/npm/dm/ember-aria-switch.svg)](https://www.npmjs.com/package/ember-aria-switch)
[![npm version](http://img.shields.io/npm/v/ember-aria-switch.svg?style=flat)](https://npmjs.org/package/ember-aria-switch "View this project on npm")
[![dependencies Status](https://david-dm.org/rajasegar/ember-aria-switch/status.svg)](https://david-dm.org/rajasegar/ember-aria-switch)
[![devDependencies Status](https://david-dm.org/rajasegar/ember-aria-switch/dev-status.svg)](https://david-dm.org/rajasegar/ember-aria-switch?type=dev)
[![EmberObserver](http://emberobserver.com/badges/ember-aria-switch.svg?branch=master)](http://emberobserver.com/addons/ember-aria-switch)

ARIA Switch button in an Ember addon based on the WAI-ARIA specifications.

## Demo

[Demo](http://rajasegar.github.io/ember-aria-switch/)

## Installation

-   `ember install ember-aria-switch`

## Usage

Example Markup:

```hbs
<AriaSwitch @label="My Label" @checked={{true}} />
```

With external label

```hbs

<p id="ex_label">
  Item 2
</p>
<AriaSwitch @ariaLabelledBy="ex_label" />
```

With disabled state

```hbs
<AriaSwitch @label="My Label" @disabled={{true}} />

```

Without aria-label

```hbs
<AriaSwitch />
```

With custom on/off labels

```hbs
<AriaSwitch @onLabel="Yes" @offLabel="No" />
```

With toggle callback

```hbs
<AriaSwitch @onToggle={{action "toggleCallback"}} />

```

And your `toggleCallback` can be defined such as:

```js
export default Ember.Controller.extend({
  actions: {
    toggleCallback(toggleValue) {
      let val = toggleValue ? "ON" : "OFF";
      alert(`ARIA Switch: You turned me ${val}!`);
    }
  }
});

```

## Running

-   `ember serve`
-   Visit your app at <http://localhost:4200>.

## Running Tests

-   `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
-   `ember test`
-   `ember test --server`

## Building

-   `ember build`

For more information on using ember-cli, visit <https://ember-cli.com/>.
