<template lang="pug">

  .user-input
    .row.header
      .is-3-1
        h2.control-header Amount
      .is-3-1
        h2.control-header Installment Month
      .is-3-1
        h2.control-header Rate(&#37;)
    .row.input
      .is-3-1
        span &#36;
        input(type="number" v-model.lazy="amount").amount
      .is-3-1
        p {{ month }}
        input(type="range" min="0" max="36" v-model="month").month
      .is-3-1
        p {{ rate + '&#37;' }}
        input(type="range" min="0" max="50" v-model="rate").rate
    .row
      .is-full
        div(tabindex="0" role="button").calculate-btn
          img(src="../assets/icons/calculate-button.svg")
          | calculate

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'user-input',
  mounted () {
    // get initial values from store
    this.amount = this.getAmount
    this.month = this.getMonth
    this.rate = this.getRate
  },
  data () {
    return {
      amount: '',
      month: 0,
      rate: 0
    }
  },
  watch: {
    // Watch user Inputes and update states
    amount () {
      this.updateAmount({
        amount: this.amount
      })
    },
    month () {
      this.updateMonth({
        month: this.month
      })
    },
    rate () {
      this.updateRate({
        rate: this.rate
      })
    }
  },
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
    ])
  }
}
</script>

<style lang="sass" scoped>

$container-width: 960px
$green-gradient: rgba(0,161,153,1) linear-gradient(-45deg, rgba(0,161,153,1) 0%, rgba(34,181,115,1) 16%, rgba(29,189,112,1) 31%, rgba(0,232,93,1) 65%, rgba(0,243,48,1) 71%, rgba(0,255,0,1) 100%)

.user-input
  box-sizing: border-box
  width: $container-width
  background: $green-gradient
  font-family: 'Raleway', sans-serif
  font-weight: 600
  color: #fff
  margin-bottom: 30px

.row
  width: 100%
  display: flex

.header
  padding-top: 17px
.input
  padding-bottom: 17px

.is-3-1
  padding: 20px
  width: calc(100% / 3)

.control-header
  font-size: 14px

.is-full
  flex-grow: 1
  text-transform: uppercase
  text-align: center
  letter-spacing: 2px
  cursor: pointer
  & > .calculate-btn
    padding: 20px 0
    background: rgba(0,0,0,0.1)
    &:hover, &:focus
      background: rgba(0,0,0,0.45)
    & > img
      display: inline-block
      height: 25px
      width: 25px
      padding-right: 5px
      margin-bottom: -5px


.amount
  color: #fff
  margin-top: -3px
  border: 0 none
  background: transparent
  border-bottom: 2px solid #fff
  width: 85%
  font-size: 25px
  text-align: center
  &:focus
    outline: none

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button
  -webkit-appearance: none
  margin: 0


.month, .rate
  -webkit-appearance: none
  width: 85%
  background: #fff
  height: 4px
  border-radius: 3px
  &:focus
    outline: none

</style>
