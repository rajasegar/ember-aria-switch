'use strict';



;define("dummy/app", ["exports", "dummy/resolver", "ember-load-initializers", "dummy/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var App; // Ember.MODEL_FACTORY_INJECTIONS = true;

  App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("dummy/components/aria-switch", ["exports", "ember-aria-switch/components/aria-switch"], function (_exports, _ariaSwitch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _ariaSwitch.default;
    }
  });
});
;define("dummy/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _welcomePage.default;
    }
  });
});
;define("dummy/controllers/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    actions: {
      toggleCallback: function toggleCallback(toggleValue) {
        var val = toggleValue ? "ON" : "OFF";
        alert("ARIA Switch: You turned me ".concat(val, "!"));
      }
    }
  });

  _exports.default = _default;
});
;define("dummy/ember-aria-switch/tests/addon.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | addon');
  QUnit.test('addon/components/aria-switch.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/aria-switch.js should pass ESLint\n\n');
  });
});
;define("dummy/ember-aria-switch/tests/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app/components/aria-switch.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/aria-switch.js should pass ESLint\n\n');
  });
});
;define("dummy/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',
    initialize: function initialize() {
      var app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
  _exports.default = _default;
});
;define("dummy/initializers/export-application-global", ["exports", "dummy/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("dummy/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("dummy/router", ["exports", "dummy/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {});
  var _default = Router;
  _exports.default = _default;
});
;define("dummy/routes/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("dummy/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _ajax.default;
    }
  });
});
;define("dummy/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "6J6Ps8ui",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,1,\"page\"],[14,0,\"content-area mxw-600\"],[12],[2,\"\\n\\n  \"],[10,\"header\"],[14,\"role\",\"banner\"],[12],[2,\"\\n    \"],[10,\"h1\"],[12],[2,\"ember-aria-switch\"],[13],[2,\"\\n    \"],[10,\"h2\"],[12],[2,\"\\n      \"],[10,\"abbr\"],[14,\"title\",\"Accessible Rich Internet Applications\"],[12],[2,\"ARIA\"],[13],[2,\" Switch Demo\\n    \"],[13],[2,\"\\n    \"],[10,\"p\"],[12],[2,\"\\n      Examples of an ARIA Switch button through an Ember addon.  For more information about this component, please read \"],[10,\"a\"],[14,6,\"https://www.w3.org/TR/wai-aria-1.1/#switch\"],[12],[2,\"The ARIA 1.1 switch role specification\"],[13],[2,\",\\n      \"],[10,\"a\"],[14,6,\"http://inclusive-components.club/toggle-button/\"],[12],[2,\"Inclusive Components Toggle Buttons\"],[13],[2,\", \"],[10,\"a\"],[14,6,\"https://github.com/rajasegar/ember-aria-switch\"],[12],[2,\"the GitHub repo for this code\"],[13],[2,\" and the \"],[10,\"a\"],[14,6,\"https://github.com/scottaohara/aria-switch-button\"],[12],[2,\"original\"],[13],[2,\" ARIA Switch button.\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\\n  \"],[10,\"main\"],[14,\"aria-label\",\"Demo Content\"],[12],[2,\"\\n    \"],[1,[30,[36,1],[[30,[36,0],null,null]],null]],[2,\"\\n   \"],[13],[2,\"\\n\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "meta": {
      "moduleName": "dummy/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("dummy/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "a27wYIPT",
    "block": "{\"symbols\":[],\"statements\":[[8,\"aria-switch\",[[24,\"label\",\"My Label\"]],[[\"@checked\"],[true]],null],[2,\"\\n\\n\"],[10,\"hr\"],[12],[13],[2,\"\\n\\n\"],[10,\"p\"],[14,1,\"ex_label\"],[12],[2,\"\\n  Item 2\\n\"],[13],[2,\"\\n\"],[8,\"aria-switch\",[[24,\"ariaLabelledBy\",\"ex_label\"]],[[\"@disabled\"],[true]],null],[2,\"\\n\\n\"],[10,\"hr\"],[12],[13],[2,\"\\n\\n\"],[10,\"p\"],[14,1,\"ex_label2\"],[12],[2,\"\\n  Item 3 (purposefully disabled)\\n\"],[13],[2,\"\\n\"],[8,\"aria-switch\",[[24,\"label\",\"My Label\"]],[[\"@disabled\"],[true]],null],[2,\"\\n\\n\"],[10,\"hr\"],[12],[13],[2,\"\\n\\n\"],[10,\"p\"],[14,1,\"ex_label3\"],[12],[2,\"\\n  Item 4 (purposefully missing aria-label)\\n\"],[13],[2,\"\\n\"],[8,\"aria-switch\",[],[[],[]],null],[2,\"\\n\\n\"],[10,\"hr\"],[12],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"With custom on/off labels\"],[13],[2,\"\\n\"],[8,\"aria-switch\",[[24,\"onLabel\",\"Yes\"],[24,\"offLabel\",\"No\"],[24,0,\"toggle toggle-primary\"]],[[],[]],null],[2,\"\\n\"],[10,\"hr\"],[12],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"With toggle callback\"],[13],[2,\"\\n\"],[8,\"aria-switch\",[],[[\"@onToggle\"],[[32,0,[\"toggleCallback\"]]]],null],[2,\"\\n\\n\"],[10,\"hr\"],[12],[13],[2,\"\\n\"],[10,\"p\"],[12],[2,\"With color customization using CSS variables\"],[13],[2,\"\\n\"],[8,\"aria-switch\",[],[[\"@onToggle\"],[[32,0,[\"toggleCallback\"]]]],null],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "dummy/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;

;define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("dummy/app")["default"].create({});
          }
        
//# sourceMappingURL=dummy.map
