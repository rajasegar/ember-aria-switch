'use strict';

define("dummy/tests/helpers/destroy-app", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = destroyApp;

  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define("dummy/tests/helpers/module-for-acceptance", ["exports", "qunit", "dummy/tests/helpers/start-app", "dummy/tests/helpers/destroy-app"], function (_exports, _qunit, _startApp, _destroyApp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default(name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  }
});
define("dummy/tests/helpers/resolver", ["exports", "dummy/resolver", "dummy/config/environment"], function (_exports, _resolver, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };
  var _default = resolver;
  _exports.default = _default;
});
define("dummy/tests/helpers/start-app", ["exports", "dummy/app", "dummy/config/environment"], function (_exports, _app, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = startApp;

  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);

      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define("dummy/tests/integration/components/aria-switch-test", ["@ember/test-helpers", "qunit", "ember-qunit"], function (_testHelpers, _qunit, _emberQunit) {
  "use strict";

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (0, _qunit.module)('Integration | Component | aria switch', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it should render a button element', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  {{aria-switch}}
                */
                {"id":"g8c6C/tH","block":"{\"symbols\":[],\"statements\":[[1,[34,0]]],\"hasEval\":false,\"upvars\":[\"aria-switch\"]}","meta":{}}));

              case 2:
                assert.equal(this.element.querySelectorAll('button').length, 1);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it should render two toggle elements', /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  {{aria-switch}}
                */
                {"id":"g8c6C/tH","block":"{\"symbols\":[],\"statements\":[[1,[34,0]]],\"hasEval\":false,\"upvars\":[\"aria-switch\"]}","meta":{}}));

              case 2:
                assert.equal((0, _testHelpers.findAll)('span').length, 2);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it should have a type attribute set to button ', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  {{aria-switch}}
                */
                {"id":"g8c6C/tH","block":"{\"symbols\":[],\"statements\":[[1,[34,0]]],\"hasEval\":false,\"upvars\":[\"aria-switch\"]}","meta":{}}));

              case 2:
                assert.equal((0, _testHelpers.find)('button').getAttribute('type'), "button");

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it should have a role attribute set to switch ', /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  {{aria-switch}}
                */
                {"id":"g8c6C/tH","block":"{\"symbols\":[],\"statements\":[[1,[34,0]]],\"hasEval\":false,\"upvars\":[\"aria-switch\"]}","meta":{}}));

              case 2:
                assert.equal((0, _testHelpers.find)('button').getAttribute('role'), "switch");

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it should have a data-action attribute set to aria-switch ', /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  {{aria-switch}}
                */
                {"id":"g8c6C/tH","block":"{\"symbols\":[],\"statements\":[[1,[34,0]]],\"hasEval\":false,\"upvars\":[\"aria-switch\"]}","meta":{}}));

              case 2:
                assert.equal((0, _testHelpers.find)('button').getAttribute('data-action'), "aria-switch");

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it should have a default aria-checked state as false ', /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  {{aria-switch}}
                */
                {"id":"g8c6C/tH","block":"{\"symbols\":[],\"statements\":[[1,[34,0]]],\"hasEval\":false,\"upvars\":[\"aria-switch\"]}","meta":{}}));

              case 2:
                assert.equal((0, _testHelpers.find)('button').getAttribute('aria-checked'), "false");

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it should have a default aria-checked state as given ', /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(assert) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  {{aria-switch checked=true}}
                */
                {"id":"paKTxVQU","block":"{\"symbols\":[],\"statements\":[[1,[30,[36,0],null,[[\"checked\"],[true]]]]],\"hasEval\":false,\"upvars\":[\"aria-switch\"]}","meta":{}}));

              case 2:
                assert.equal((0, _testHelpers.find)('button').getAttribute('aria-checked'), "true");

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it should toggle the aria-checked ', /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(assert) {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  {{aria-switch}}
                */
                {"id":"g8c6C/tH","block":"{\"symbols\":[],\"statements\":[[1,[34,0]]],\"hasEval\":false,\"upvars\":[\"aria-switch\"]}","meta":{}}));

              case 2:
                assert.equal((0, _testHelpers.find)('button').getAttribute('aria-checked'), "false");
                _context8.next = 5;
                return (0, _testHelpers.click)('button');

              case 5:
                assert.equal((0, _testHelpers.find)('button').getAttribute('aria-checked'), "true");

              case 6:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      return function (_x8) {
        return _ref9.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it should have a disabled state if specified ', /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(assert) {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  {{aria-switch disabled=true}}
                */
                {"id":"FQyNmTKC","block":"{\"symbols\":[],\"statements\":[[1,[30,[36,0],null,[[\"disabled\"],[true]]]]],\"hasEval\":false,\"upvars\":[\"aria-switch\"]}","meta":{}}));

              case 2:
                assert.equal((0, _testHelpers.find)('button').disabled, true);
                assert.equal((0, _testHelpers.find)('button').getAttribute('data-keep-disabled'), "");

              case 4:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      return function (_x9) {
        return _ref10.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it should have an aria-label ', /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(assert) {
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  {{aria-switch label="My Aria Label"}}
                */
                {"id":"6+c25zoi","block":"{\"symbols\":[],\"statements\":[[1,[30,[36,0],null,[[\"label\"],[\"My Aria Label\"]]]]],\"hasEval\":false,\"upvars\":[\"aria-switch\"]}","meta":{}}));

              case 2:
                assert.equal((0, _testHelpers.find)('button').getAttribute('aria-label'), "My Aria Label");

              case 3:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      return function (_x10) {
        return _ref11.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it should have an ON label as given ', /*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(assert) {
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  {{aria-switch onLabel="Yes"}}
                */
                {"id":"hLODb6l8","block":"{\"symbols\":[],\"statements\":[[1,[30,[36,0],null,[[\"onLabel\"],[\"Yes\"]]]]],\"hasEval\":false,\"upvars\":[\"aria-switch\"]}","meta":{}}));

              case 2:
                assert.equal((0, _testHelpers.findAll)('span')['0'].textContent.trim(), "Yes");

              case 3:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      return function (_x11) {
        return _ref12.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it should have an OFF label as given ', /*#__PURE__*/function () {
      var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(assert) {
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  {{aria-switch offLabel="No"}}
                */
                {"id":"qNV5mSRG","block":"{\"symbols\":[],\"statements\":[[1,[30,[36,0],null,[[\"offLabel\"],[\"No\"]]]]],\"hasEval\":false,\"upvars\":[\"aria-switch\"]}","meta":{}}));

              case 2:
                assert.equal((0, _testHelpers.findAll)('span')['1'].textContent.trim(), "No");

              case 3:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }));

      return function (_x12) {
        return _ref13.apply(this, arguments);
      };
    }());
    (0, _qunit.test)('it should invoke the onToggle callback once clicked', /*#__PURE__*/function () {
      var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(assert) {
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                this.set('result', '');
                this.set('toggleCallback', function (toggleValue) {
                  var value = toggleValue ? "ON" : "OFF";
                  this.set('result', value);
                });
                _context13.next = 4;
                return (0, _testHelpers.render)(Ember.HTMLBars.template(
                /*
                  {{aria-switch onToggle=(action toggleCallback)}}
                                  <div id="result">{{result}}</div>
                */
                {"id":"oibHbvnc","block":"{\"symbols\":[],\"statements\":[[1,[30,[36,2],null,[[\"onToggle\"],[[30,[36,1],[[32,0],[35,0]],null]]]]],[2,\"\\n                  \"],[10,\"div\"],[14,1,\"result\"],[12],[1,[34,3]],[13]],\"hasEval\":false,\"upvars\":[\"toggleCallback\",\"action\",\"aria-switch\",\"result\"]}","meta":{}}));

              case 4:
                _context13.next = 6;
                return (0, _testHelpers.click)('button');

              case 6:
                assert.equal((0, _testHelpers.find)('#result').textContent.trim(), "ON");
                _context13.next = 9;
                return (0, _testHelpers.click)('button');

              case 9:
                assert.equal((0, _testHelpers.find)('#result').textContent.trim(), "OFF");

              case 10:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      return function (_x13) {
        return _ref14.apply(this, arguments);
      };
    }());
  });
});
define("dummy/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
});
define("dummy/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/aria-switch-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/aria-switch-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});
define("dummy/tests/test-helper", ["dummy/app", "dummy/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define('dummy/config/environment', [], function() {
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

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
