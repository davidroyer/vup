<template>
  <button class="btn btn-blue" @click="$emit('clicked')">
    <!-- <icon-account-box class="w-6 h-6 mr-2"/> -->
    <span class="flex-1" v-text="label" />
    <download-icon class="flex-grow-0 ml-2" />
  </button>
</template>

<script>
// import IconAccountBox from '/@vite-icons/mdi/account-box'
import { DownloadIcon } from '@heroicons/vue/solid'

export default {
  props: {
    label: {
      type: String,
      default: 'Default Text'
    }
  },
  components: { DownloadIcon },
  emits: ['clicked']
}
</script>

<style lang="postcss">
.btn {
  @apply inline-flex justify-center items-center p-2 px-4 font-semibold rounded-lg shadow;
}

.btn-blue {
  @apply bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;
}
</style>
