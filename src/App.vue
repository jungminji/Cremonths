<template lang="pug">
  .app
    transition(name="component-fade" mode="out-in")
      Controls
    hr
    transition(name="component-fade" mode="out-in")
      Result
    h5.footer-text Special thanks to Erica
    h5.footer-text Developer: Jungmin Ji
    h5.footer-text Powered by Vue
    
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
  font-family: 'Open Sans', sans-serif

.footer-text
  color: grey
  font-size: 12px
  font-weight: lighter

.component-fade-enter-active, .component-fade-leave-active
  transition: opacity .3s ease
.component-fade-enter, .component-fade-leave-to
  opacity: 0
</style>
