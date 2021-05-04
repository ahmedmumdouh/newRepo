<template>
      <!-- <LongPoolling /> -->
      <ShortPolling />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import LongPoolling from './components/LongPoollingComponent.vue'
import ShortPolling from './components/ShortPolling.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    LongPoolling,
    ShortPolling
  }
}
</script>

<style>
#app {

  text-align: center;
  
}
</style>
