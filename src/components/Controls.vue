<template lang="pug">
  .controls(v-cloak v-if="!this.$store.state.renderStatus")
    .row.headers
      .is-3-1
        h2 Amount
      .is-3-1
        h2 Installment Month
      .is-3-1
        h2 Rate(%)
    .row.inputs
      .is-3-1
        input(v-model.lazy="amount" number)
      .is-3-1
        span {{ installmentMonth }}
        input(type="range" min="0" max="36" v-model.number="installmentMonth")
      .is-3-1
        span {{ rate }}
        input(type="range" min="0" max="50" v-model.number="rate")
    .row
      .is-full
        button(type="button" @click="calculateResult") CALCULATE
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'controls',
  data () {
    return {
      // v-model.lazy to update amount after entering amount values
      amount: '',
      installmentMonth: 0,
      rate: 0
    }
  },
  watch: {
    // when this.amount changed, dispatch(vuex action) updateAmount with payload amount which value is this.amount
    amount () {
      this.updateAmount({
        amount: this.amount
      })
    },
    installmentMonth () {
      this.updateMonth({
        month: this.installmentMonth
      })
    },
    rate () {
      this.updateRate({
        rate: this.rate
      })
    }
  },
  // Maps the vuex actions to component's methods
  methods: {
    ...mapActions({
      updateAmount: 'updateAmount',
      updateMonth: 'updateMonth',
      updateRate: 'updateRate',
      renderResult: 'renderResult'
    }),
    calculateResult () {
      this.renderResult({
        renderStatus: true
      })
    }
  }
}
</script>

<style lang="sass">
div
  box-sizing: border-box
  border: 1px solid #eee
</style>
