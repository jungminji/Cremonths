<template lang="pug">
  .app(v-cloak)
    transition(name="fade" mode="out-in") 
      UserInput
    transition(name="fade" mode="out-in")
      ResultHeader
    transition(name="fade" mode="out-in")
      ResultTable
    transition(name="fade" mode="out-in")
      Reset
</template>

<script>
import UserInput from './components/UserInput'
import ResultHeader from './components/ResultHeader'
import ResultTable from './components/ResultTable'
import Reset from './components/Reset'

export default {
  name: 'app',
  components: {
    UserInput,
    ResultHeader,
    ResultTable,
    Reset
  }
}
</script>

<style lang="sass">

@import './sass/reset'
body
  background: #1c1c1c
  padding-bottom: 45px
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

.fade-enter-active, .fade-leave-active
  transition: opacity 1s
.fade-enter, .fade-leave-to
  opacity: 0
</style>
