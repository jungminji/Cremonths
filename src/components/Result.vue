<template lang="pug">
  .result
    h1(v-if="this.$store.state.renderStatus") Show this Msg
    button(type="button" @click="resetAll") Reset
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'table',
  data () {
    return {
    }
  },
  methods: {
    ...mapActions({
      reset: 'reset'
    }),
    resetAll () {
      this.reset({
        renderStatus: false,
        amount: 0,
        month: 0,
        rate: 0
      })
      document.querySelector('.field-amount').value = ''
    }
  }
}
</script>

<style lang="sass">

</style>
