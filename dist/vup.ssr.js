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
}function render$4(_ctx, _cache) {
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
}function render$3(_ctx, _cache) {
  return (vue.openBlock(), vue.createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, [
    vue.createVNode("path", {
      "fill-rule": "evenodd",
      d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
      "clip-rule": "evenodd"
    })
  ]))
}var script$2 = /*#__PURE__*/vue.defineComponent({
  name: 'VupSample',
  // vue component name
  components: {
    BeakerIcon: render$4
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
});var _withId = /*#__PURE__*/vue.withScopeId("data-v-b71d84f2");

vue.pushScopeId("data-v-b71d84f2");

var _hoisted_1$1 = {
  class: "vup-sample"
};

var _hoisted_2$1 = /*#__PURE__*/vue.createTextVNode(". ");

vue.popScopeId();

var render$2 = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_BeakerIcon = vue.resolveComponent("BeakerIcon");

  return vue.openBlock(), vue.createBlock("div", _hoisted_1$1, [vue.createVNode("p", null, [vue.createTextVNode(" The counter was " + vue.toDisplayString(_ctx.changedBy) + " to ", 1), vue.createVNode("b", null, vue.toDisplayString(_ctx.counter), 1), _hoisted_2$1]), vue.createVNode(_component_BeakerIcon, {
    class: "w-5 h-5 text-blue-500"
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
}var css_248z$2 = ".vup-sample[data-v-b71d84f2] {\n  display: block;\n  margin: 25px auto;\n  border: 1px solid #ccc;\n  background: #eaeaea;\n  text-align: center;\n  padding: 25px;\n}\n\n.vup-sample p[data-v-b71d84f2] {\n  margin: 0 0 1em;\n}\n";
styleInject(css_248z$2);script$2.render = render$2;
script$2.__scopeId = "data-v-b71d84f2";// import IconAccountBox from '/@vite-icons/mdi/account-box'
var script$1 = {
  props: {
    label: {
      type: String,
      default: 'Default Text'
    }
  },
  components: {
    DownloadIcon: render$3
  },
  emits: ['clicked']
};function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_download_icon = vue.resolveComponent("download-icon");

  return vue.openBlock(), vue.createBlock("button", {
    class: "btn btn-blue",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('clicked');
    })
  }, [vue.createVNode("span", {
    class: "flex-1",
    textContent: vue.toDisplayString($props.label)
  }, null, 8, ["textContent"]), vue.createVNode(_component_download_icon, {
    class: "flex-grow-0 ml-2"
  })]);
}var css_248z$1 = ".btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  font-weight: 600;\n  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.btn-blue {\n  --tw-bg-opacity: 1;\n  background-color: rgba(59, 130, 246, var(--tw-bg-opacity));\n}\n\n.btn-blue:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(29, 78, 216, var(--tw-bg-opacity));\n}\n\n.btn-blue {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n.btn-blue:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgba(96, 165, 250, var(--tw-ring-opacity));\n  --tw-ring-opacity: 0.75;\n}\n";
styleInject(css_248z$1);script$1.render = render$1;var script = {
  name: 'VBlock',
  components: {
    BeakerIcon: render$4
  }
};var _hoisted_1 = {
  class: "v-block"
};

var _hoisted_2 = /*#__PURE__*/vue.createVNode("div", null, "Basic Div new", -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_BeakerIcon = vue.resolveComponent("BeakerIcon");

  return vue.openBlock(), vue.createBlock("div", _hoisted_1, [vue.createVNode(_component_BeakerIcon, {
    class: "w-5 h-5 text-blue-500"
  }), _hoisted_2]);
}var css_248z = ".v-block {\n  margin-top: 1.25rem;\n  margin-bottom: 1.25rem;\n  --tw-bg-opacity: 1;\n  background-color: rgba(253, 230, 138, var(--tw-bg-opacity));\n  padding: 1.25rem;\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n}\n";
styleInject(css_248z);script.render = render;var components$1=/*#__PURE__*/Object.freeze({__proto__:null,VupSample: script$2,VButton: script$1,VBlock: script});var install = function installVup(app) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default': install,VupSample: script$2,VButton: script$1,VBlock: script});// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    install[componentName] = component;
  }
});module.exports=install;