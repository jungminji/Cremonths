<template lang="pug">
  .controls(v-cloak)
    .row.headers
      .is-4
        h2 Amount
      .is-4
        h2 Installment Month
      .is-4
        h2 Rate(%)
    .row.inputs
      .is-4
        input(type="number" v-model.lazy="amount")
      .is-4
        input(type="range" min="12" max="36" v-model.number="installmentMonth")
      .is-4
        input(type="range" min="0" max="50" v-model.number="rate")
    .row
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
      installmentMonth: 10,
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
