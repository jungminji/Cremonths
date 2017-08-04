<template lang="pug">
  .result-header(v-if="hasValues()")
    .row
      .is-5-1 Amount
      .is-5-1 Month
      .is-5-1 Rate (&#37;)
      .is-5-1.dim Total Fee
      .is-5-1.dim Total Interest
    .row.header-values
      .is-5-1 {{ '&#36;' + getAmount }}
      .is-5-1 {{ getMonth }}
      .is-5-1 {{ getRate + '&#37;' }}
      .is-5-1.dim {{ '&#36;' + (getAmount + getTotalInterest) }}
      .is-5-1.dim {{ '&#36;' + getTotalInterest }}

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'result-header',
  computed: {
    ...mapGetters([
      'getAmount',
      'getMonth',
      'getRate',
      'getTotalInterest'
    ])
  },
  methods: {
    hasValues () {
      if (this.getAmount > 0 && this.getMonth > 0 && this.getRate > 0) {
        return true
      }
    }
  }
}
</script>

<style lang="sass" scoped>
$container-width: 960px

.result-header
  width: $container-width
  background: #333
  box-sizing: border-box
  font-family: 'Raleway', sans-serif
  font-weight: 600
  color: #fff
.row
  width: 100%
  display: flex

.header-values
  font-size: 30px

.is-5-1
  width: calc(100% / 5)
  padding: 10px 17px
.dim
  background: rgba(0,0,0,0.2)

</style>
