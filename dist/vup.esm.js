import { openBlock, createBlock, createVNode, defineComponent, pushScopeId, popScopeId, resolveComponent, createTextVNode, toDisplayString, withScopeId } from 'vue';

function render$1(_ctx, _cache) {
  return (openBlock(), createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, [
    createVNode("path", {
      "fill-rule": "evenodd",
      d: "M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z",
      "clip-rule": "evenodd"
    })
  ]))
}

var script = /*#__PURE__*/defineComponent({
  name: 'VupSample',
  // vue component name
  components: {
    BeakerIcon: render$1
  },

  data() {
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
    changedBy() {
      const {
        message
      } = this;
      if (!message.action) return 'initialized';
      return `${message.action} ${message.amount || ''}`.trim();
    }

  },
  methods: {
    increment(arg) {
      const amount = typeof arg !== 'number' ? 1 : arg;
      this.counter += amount;
      this.message.action = 'incremented by';
      this.message.amount = amount;
    },

    decrement(arg) {
      const amount = typeof arg !== 'number' ? 1 : arg;
      this.counter -= amount;
      this.message.action = 'decremented by';
      this.message.amount = amount;
    },

    reset() {
      this.counter = this.initCounter;
      this.message.action = 'reset';
      this.message.amount = null;
    }

  }
});

const _withId = /*#__PURE__*/withScopeId("data-v-7d19e387");

pushScopeId("data-v-7d19e387");

const _hoisted_1 = {
  class: "vup-sample"
};

const _hoisted_2 = /*#__PURE__*/createTextVNode(". ");

popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_BeakerIcon = resolveComponent("BeakerIcon");

  return openBlock(), createBlock("div", _hoisted_1, [createVNode("p", null, [createTextVNode(" The counter was " + toDisplayString(_ctx.changedBy) + " to ", 1), createVNode("b", null, toDisplayString(_ctx.counter), 1), _hoisted_2]), createVNode(_component_BeakerIcon, {
    class: "h-5 w-5 text-blue-500"
  }), createVNode("button", {
    onClick: _cache[1] || (_cache[1] = (...args) => _ctx.increment && _ctx.increment(...args))
  }, "Click +1"), createVNode("button", {
    onClick: _cache[2] || (_cache[2] = (...args) => _ctx.decrement && _ctx.decrement(...args))
  }, "Click -1"), createVNode("button", {
    onClick: _cache[3] || (_cache[3] = $event => _ctx.increment(5))
  }, "Click +5"), createVNode("button", {
    onClick: _cache[4] || (_cache[4] = $event => _ctx.decrement(5))
  }, "Click -5"), createVNode("button", {
    onClick: _cache[5] || (_cache[5] = (...args) => _ctx.reset && _ctx.reset(...args))
  }, "Reset")]);
});

function styleInject(css, ref) {
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
}

var css_248z = "\n.vup-sample[data-v-7d19e387] {\n    display: block;\n    width: 400px;\n    margin: 25px auto;\n    border: 1px solid #ccc;\n    background: #eaeaea;\n    text-align: center;\n    padding: 25px;\n}\n.vup-sample p[data-v-7d19e387] {\n    margin: 0 0 1em;\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-7d19e387";

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  VupSample: script
});

// Import vue components

const install = function installVup(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export default install;
export { script as VupSample };
