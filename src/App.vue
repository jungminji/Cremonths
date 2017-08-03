<template lang="pug">
  .app
    transition(name="component-fade" mode="out-in")
      Controls
    transition(name="component-fade" mode="out-in")
      Result
    
</template>

<script>
import Controls from './components/Controls'
import Result from './components/Result'

export default {
  name: 'app',
  components: {
    Controls,
    Result
  }
}
</script>

<style lang="sass">
body
  width: 100vw
  display: flex
  justify-content: center
  align-items: center
  background: #1c1c1c

  padding-top: 65px

// Component Transition
.component-fade-enter-active, .component-fade-leave-active
  transition: opacity .3s ease
.component-fade-enter, .component-fade-leave-to
  opacity: 0
</style>
