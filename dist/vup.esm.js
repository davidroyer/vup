import { openBlock, createBlock, createVNode, defineComponent, pushScopeId, popScopeId, resolveComponent, createTextVNode, toDisplayString, withScopeId } from 'vue';

function render$4(_ctx, _cache) {
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

function render$3(_ctx, _cache) {
  return (openBlock(), createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, [
    createVNode("path", {
      "fill-rule": "evenodd",
      d: "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
      "clip-rule": "evenodd"
    })
  ]))
}

var script$2 = /*#__PURE__*/defineComponent({
  name: 'VupSample',
  // vue component name
  components: {
    BeakerIcon: render$4
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

const _withId = /*#__PURE__*/withScopeId("data-v-b71d84f2");

pushScopeId("data-v-b71d84f2");

const _hoisted_1$1 = {
  class: "vup-sample"
};

const _hoisted_2$1 = /*#__PURE__*/createTextVNode(". ");

popScopeId();

const render$2 = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_BeakerIcon = resolveComponent("BeakerIcon");

  return openBlock(), createBlock("div", _hoisted_1$1, [createVNode("p", null, [createTextVNode(" The counter was " + toDisplayString(_ctx.changedBy) + " to ", 1), createVNode("b", null, toDisplayString(_ctx.counter), 1), _hoisted_2$1]), createVNode(_component_BeakerIcon, {
    class: "w-5 h-5 text-blue-500"
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

var css_248z$2 = ".vup-sample[data-v-b71d84f2] {\n  display: block;\n  margin: 25px auto;\n  border: 1px solid #ccc;\n  background: #eaeaea;\n  text-align: center;\n  padding: 25px;\n}\n\n.vup-sample p[data-v-b71d84f2] {\n  margin: 0 0 1em;\n}\n";
styleInject(css_248z$2);

script$2.render = render$2;
script$2.__scopeId = "data-v-b71d84f2";

// import IconAccountBox from '/@vite-icons/mdi/account-box'
var script$1 = {
  props: {
    label: {
      type: String,
      default: 'Button Text'
    }
  },
  components: {
    DownloadIcon: render$3
  },
  emits: ['clicked']
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_download_icon = resolveComponent("download-icon");

  return openBlock(), createBlock("button", {
    class: "btn btn-blue",
    onClick: _cache[1] || (_cache[1] = $event => _ctx.$emit('clicked'))
  }, [createVNode("span", {
    class: "flex-1",
    textContent: toDisplayString($props.label)
  }, null, 8, ["textContent"]), createVNode(_component_download_icon, {
    class: "flex-grow-0 ml-2"
  })]);
}

var css_248z$1 = ".btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  font-weight: 600;\n  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.btn-blue {\n  --tw-bg-opacity: 1;\n  background-color: rgba(59, 130, 246, var(--tw-bg-opacity));\n}\n\n.btn-blue:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(29, 78, 216, var(--tw-bg-opacity));\n}\n\n.btn-blue {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n.btn-blue:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgba(96, 165, 250, var(--tw-ring-opacity));\n  --tw-ring-opacity: 0.75;\n}\n";
styleInject(css_248z$1);

script$1.render = render$1;

var script = {
  name: 'VBlock',
  components: {
    BeakerIcon: render$4
  }
};

const _hoisted_1 = {
  class: "v-block"
};

const _hoisted_2 = /*#__PURE__*/createVNode("div", null, "Basic Div new", -1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BeakerIcon = resolveComponent("BeakerIcon");

  return openBlock(), createBlock("div", _hoisted_1, [createVNode(_component_BeakerIcon, {
    class: "w-5 h-5 text-blue-500"
  }), _hoisted_2]);
}

var css_248z = ".v-block {\n  margin-top: 1.25rem;\n  margin-bottom: 1.25rem;\n  --tw-bg-opacity: 1;\n  background-color: rgba(253, 230, 138, var(--tw-bg-opacity));\n  padding: 1.25rem;\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n}\n";
styleInject(css_248z);

script.render = render;

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  VupSample: script$2,
  VButton: script$1,
  VBlock: script
});

// Import vue components

const install = function installVup(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export default install;
export { script as VBlock, script$1 as VButton, script$2 as VupSample };
