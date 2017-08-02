<template lang="pug">
  .app
    Controls
    hr
    Result
    h5.footer-text Designed by Erica Niu
    h5.footer-text Powered by Vue 2
    
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
</style>
