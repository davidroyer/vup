<template>
  <div id="app" class="container px-4 mx-auto">
    <vup-sample />
    <v-block />
    <v-button @click="handleClick" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
// Uncomment import and local "components" registration if library is not registered globally.
// import { VupSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',

  methods: {
    handleClick() {
      alert('Worked!')
    }
  }
  // components: {
  //  VupSample,
  // }
})
</script>
