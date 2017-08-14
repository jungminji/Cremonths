<template lang="pug">
  .reset(v-if="hasValues()")
    div(role="button" @click="resetValues" tabindex="0" @keyup.enter="resetValues").btn reset
    footer.footer Designer: Erica Niu, Developer: Jungmin Ji / Vue, Vuex
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { EventBus } from '../EventBus.js'

export default {
  name: 'reset',
  computed: {
    ...mapGetters([
      'getAmount',
      'getMonth',
      'getRate'
    ])
  },
  methods: {
    ...mapActions([
      'updateAmount',
      'updateMonth',
      'updateRate'
    ]),
    hasValues () {
      if (this.getAmount > 0 && this.getMonth > 0 && this.getRate > 0) {
        return true
      }
    },
    resetValues () {
      this.updateAmount({
        amount: 0
      })
      this.updateMonth({
        month: 0
      })
      this.updateRate({
        rate: 0
      })
      EventBus.$emit('G-Event-Reset')
    }
  }
}
</script>

<style lang="sass">
$btn-width: 1040px
$green-gradient: rgba(0,161,153,1) linear-gradient(-45deg, rgba(0,161,153,1) 0%, rgba(34,181,115,1) 16%, rgba(29,189,112,1) 31%, rgba(0,232,93,1) 65%, rgba(0,243,48,1) 71%, rgba(0,255,0,1) 100%)

.btn
  position: relative
  width: $btn-width
  background: $green-gradient
  line-height: 60px
  text-transform: uppercase
  color: #fff
  cursor: pointer
  text-align: center
  font-family: 'Raleway', sans-serif
  &:before
    position: absolute
    content: ''
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: rgba(0, 0, 0, 0.11)

footer
  width: $btn-width - 80px
  margin-left: 40px
  background: #333
  color: #fff
  font-family: 'Raleway', sans-serif
  font-size: 11px
  text-align: center
  line-height: 30px

</style>
