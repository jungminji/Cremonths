<template lang="pug">
  .result(v-cloak v-if="this.$store.state.renderStatus")
    .row
      .is-5-1
        h2.result-header Amount
      .is-5-1
        h2.result-header Month
      .is-5-1
        h2.result-header Rate (%)
      .is-5-1
        h2.result-header TotalFee
      .is-5-1
        h2.result-header TotalInterest
    .row
      .is-5-1
        h2 {{ amount }}
      .is-5-1
        h2 {{ installmentMonth }}
      .is-5-1
        h2 {{ rate }}
      .is-5-1
        h2 {{ Math.round(amount + totalInterest) }}
      .is-5-1
        h2 {{ Math.round(totalInterest) }}
    .result-list
      .row.data-table
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
          div.reset-btn(tabindex="0" role="button" @click="resetAll" @keyup.enter="resetAll") Reset
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
      return Math.round(this.amount / this.installmentMonth)
    },
    renderInterest (turn) {
      return Math.round((this.amount - ((this.amount / this.installmentMonth) * (turn - 1))) * this.rate / 100 * 1 / 12)
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
@import url('https://fonts.googleapis.com/css?family=Raleway:400,600,700')

$container-width: 960px
$green-gradient: rgba(0,255,0,1) linear-gradient(-45deg, rgba(0,255,0,1) 0%, rgba(0,243,48,1) 16%, rgba(0,232,93,1) 31%, rgba(29,189,112,1) 65%, rgba(34,181,115,1) 71%, rgba(0,161,153,1) 100%)

.result
  box-sizing: border-box
  font-family: 'Raleay', sans-serif
  color: #fff
  background: #333
.result-list
  width: $container-width
  background: $green-gradient
.row
  width: 100%
  display: flex
  &.data-table
    flex-direction: column

.is-5-1, .is-full
  width: 20%
.is-5-2
  width: 40%
.is-full
  flex-grow: 1

.reset-btn
  cursor: pointer
  padding: 20px 0
  background: rgba(0, 0, 0, 0.1)
  text-align: center

</style>
