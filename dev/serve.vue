<script>
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { VupSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  // components: {
  //  VupSample,
  // }
});
</script>

<template>
  <div id="app">
    <vup-sample />
  </div>
</template>
