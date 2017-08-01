<template lang="pug">
  .result(v-cloak v-if="this.$store.state.renderStatus")
    .row
      .is-5-1
        h2 Amount
      .is-5-1
        h2 Month
      .is-5-1
        h2 Rate (%)
      .is-5-1
        h2 TotalFee
      .is-5-1
        h2 TotalInterest
    .row
      .is-5-1
        h2 {{ amount }}
      .is-5-1
        h2 {{ installmentMonth }}
      .is-5-1
        h2 {{ rate }}
      .is-5-1
        h2 {{ amount + totalInterest }}
      .is-5-1
        h2 {{ totalInterest }}
    .row
      .row.nested
        .is-5-1 Turn
        .is-5-1 Original fee
        .is-5-1 Interest
        .is-5-2 Monthly Payment
      .row.nested(v-for="turn in installmentMonth")
        .is-5-1(v-text="turn")
        .is-5-1(v-text="renderAmountPerMonth()")
        .is-5-1(v-text="renderInterest(turn)")
        .is-5-2(v-text="renderAmountPerMonth() + renderInterest(turn)")
    .row
      .is-full
        button(type="button" @click="resetAll") Reset
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

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
    },
    // Rendering Table
    renderAmountPerMonth () {
      return this.amount / this.installmentMonth
    },
    renderInterest (turn) {
      return (this.amount - ((this.amount / this.installmentMonth) * (turn - 1))) * this.rate / 100 * 1 / 12
    }
  },
  computed: {
    ...mapGetters({
      amount: 'getAmount',
      installmentMonth: 'getMonth',
      rate: 'getRate'
    }),
    totalInterest () {
      return this.amount * (this.installmentMonth + 1) * (this.rate / 100) / 24
    }
  }
}
</script>

<style lang="sass">

</style>
