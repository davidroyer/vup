'use strict';var vue=require('vue');function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}function render$1(_ctx, _cache) {
  return (vue.openBlock(), vue.createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, [
    vue.createVNode("path", {
      "fill-rule": "evenodd",
      d: "M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z",
      "clip-rule": "evenodd"
    })
  ]))
}var script = /*#__PURE__*/vue.defineComponent({
  name: 'VupSample',
  // vue component name
  components: {
    BeakerIcon: render$1
  },
  data: function data() {
    return {
      counter: 5,
      initCounter: 5,
      message: {
        action: null,
        amount: null
      }
    };
  },
  computed: {
    changedBy: function changedBy() {
      var message = this.message;
      if (!message.action) return 'initialized';
      return "".concat(message.action, " ").concat(message.amount || '').trim();
    }
  },
  methods: {
    increment: function increment(arg) {
      var amount = typeof arg !== 'number' ? 1 : arg;
      this.counter += amount;
      this.message.action = 'incremented by';
      this.message.amount = amount;
    },
    decrement: function decrement(arg) {
      var amount = typeof arg !== 'number' ? 1 : arg;
      this.counter -= amount;
      this.message.action = 'decremented by';
      this.message.amount = amount;
    },
    reset: function reset() {
      this.counter = this.initCounter;
      this.message.action = 'reset';
      this.message.amount = null;
    }
  }
});var _withId = /*#__PURE__*/vue.withScopeId("data-v-7d19e387");

vue.pushScopeId("data-v-7d19e387");

var _hoisted_1 = {
  class: "vup-sample"
};

var _hoisted_2 = /*#__PURE__*/vue.createTextVNode(". ");

vue.popScopeId();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_BeakerIcon = vue.resolveComponent("BeakerIcon");

  return vue.openBlock(), vue.createBlock("div", _hoisted_1, [vue.createVNode("p", null, [vue.createTextVNode(" The counter was " + vue.toDisplayString(_ctx.changedBy) + " to ", 1), vue.createVNode("b", null, vue.toDisplayString(_ctx.counter), 1), _hoisted_2]), vue.createVNode(_component_BeakerIcon, {
    class: "h-5 w-5 text-blue-500"
  }), vue.createVNode("button", {
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.increment && _ctx.increment.apply(_ctx, arguments);
    })
  }, "Click +1"), vue.createVNode("button", {
    onClick: _cache[2] || (_cache[2] = function () {
      return _ctx.decrement && _ctx.decrement.apply(_ctx, arguments);
    })
  }, "Click -1"), vue.createVNode("button", {
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return _ctx.increment(5);
    })
  }, "Click +5"), vue.createVNode("button", {
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return _ctx.decrement(5);
    })
  }, "Click -5"), vue.createVNode("button", {
    onClick: _cache[5] || (_cache[5] = function () {
      return _ctx.reset && _ctx.reset.apply(_ctx, arguments);
    })
  }, "Reset")]);
});function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}var css_248z = "\n.vup-sample[data-v-7d19e387] {\n    display: block;\n    width: 400px;\n    margin: 25px auto;\n    border: 1px solid #ccc;\n    background: #eaeaea;\n    text-align: center;\n    padding: 25px;\n}\n.vup-sample p[data-v-7d19e387] {\n    margin: 0 0 1em;\n}\n";
styleInject(css_248z);script.render = render;
script.__scopeId = "data-v-7d19e387";/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,VupSample: script});var install = function installVup(app) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default': install,VupSample: script});// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    install[componentName] = component;
  }
});module.exports=install;