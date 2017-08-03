<template lang="pug">
  .controls(v-cloak v-if="!this.$store.state.renderStatus")
    .row.headers
      .is-3-1
        h2.control-header Amount
      .is-3-1
        h2.control-header Installment Month
      .is-3-1
        h2.control-header Rate(%)
    .row.inputs
      .is-3-1
        input(v-model.lazy="amount" number)
      .is-3-1
        p {{ installmentMonth }}
        input(type="range" min="0" max="36" v-model.number="installmentMonth")
      .is-3-1
        p {{ rate }}
        input(type="range" min="0" max="50" v-model.number="rate")
    .row
      .is-full
        div.calculate-btn(tabindex="0" role="button" @click="calculateResult" @keyup.enter="calculateResult") CALCULATE
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

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway:400,600,700')

$container-width: 960px
$green-gradient: rgba(0,255,0,1) linear-gradient(-45deg, rgba(0,255,0,1) 0%, rgba(0,243,48,1) 16%, rgba(0,232,93,1) 31%, rgba(29,189,112,1) 65%, rgba(34,181,115,1) 71%, rgba(0,161,153,1) 100%)

.controls
  box-sizing: border-box
  width: $container-width
  background: $green-gradient
  font-family: 'Raleway', sans-serif
  font-weight: 600
  color: #fff

.row
  width: 100%
  display: flex
  &.headers, &.inputs
    padding: 15px 20px

.is-3-1, .is-full
  flex-grow: 1


.control-header
  font-size: 14px

.calculate-btn
  width: 100%
  cursor: pointer
  padding: 20px 0
  background: rgba(0, 0, 0, 0.1)
  text-align: center

</style>
