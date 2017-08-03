<template lang="pug">
  .app
    UserInput
    ResultHeader
</template>

<script>
import UserInput from './components/UserInput'
import ResultHeader from './components/ResultHeader'

export default {
  name: 'app',
  components: {
    UserInput,
    ResultHeader
  }
}
</script>

<style lang="sass">

@import './sass/reset'
body
  background: #1c1c1c
.app
  position: absolute
  top: 0
  bottom: 0
  left: 0
  right: 0
  display: flex
  justify-content: center
  flex-direction: column
  align-items: center
  background: #1c1c1c
  padding-top: 65px

</style>
