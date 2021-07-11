<template>
  <div class="v-block">
    <!-- <AcademicCapIcon class="block w-20 h-20 mx-auto mb-6 text-blue-500" /> -->
    <BeakerIcon class="v-block-icon" />
    <div>Basic Div new</div>
  </div>
</template>

<script>
import { BeakerIcon } from '@heroicons/vue/solid'

export default {
  name: 'VBlock',
  components: { BeakerIcon }
}
</script>

<style>
.v-block {
  @apply p-5 my-5 text-xl font-semibold bg-yellow-200 max-w-lg flex items-center flex-col;
}

.v-block-icon {
  @apply w-10 h-10 text-indigo-500;
}
</style>
