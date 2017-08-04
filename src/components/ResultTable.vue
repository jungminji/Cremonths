<template lang="pug">
.result-table(v-if="hasValues()")
  .list.left
    .inner-left
      .is-3-1.border
        div Turn
        div(v-for="turn in getMonth") {{ turn }}
      .is-3-1.border
        div Original fee
        div(v-for="turn in getMonth") {{ getAmountPerMonth }}
      .is-3-1
        div Interest
        div(v-for="turn in getMonth") {{ calInterest(turn) }}
  .list.right
    .inner-right
      .is-1-1
        div Monthly Payment
        div(v-for="turn in getMonth") {{ getAmountPerMonth + calInterest(turn) }}

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'result-table',
  computed: {
    ...mapGetters([
      'getAmount',
      'getMonth',
      'getRate',
      'getAmountPerMonth'
    ])
  },
  methods: {
    hasValues () {
      if (this.getAmount > 0 && this.getMonth > 0 && this.getRate > 0) {
        return true
      }
    },
    calInterest (turn) {
      return Math.round((this.getAmount - ((this.getAmount / this.getMonth) * (turn - 1))) * this.getRate / 100 * 1 / 12)
    }
  }
}
</script>

<style lang="sass">
$table-width: 1040px
$green-gradient: rgba(0,161,153,1) linear-gradient(-45deg, rgba(0,161,153,1) 0%, rgba(34,181,115,1) 16%, rgba(29,189,112,1) 31%, rgba(0,232,93,1) 65%, rgba(0,243,48,1) 71%, rgba(0,255,0,1) 100%)

.result-table
  background: $green-gradient
  width: $table-width
  display: flex
  font-family: 'Raleway', sans-serif
  color: #fff
  font-weight: 600
  overflow: auto

.list.left
  padding: 20px 0
  width: 616px

.list.right
  padding: 20px 0
  width: 424px

.inner-left, .inner-right
  display: flex
  & > .is-3-1, & > .is-1-1
    display: flex
    flex-grow: 1
    flex-direction: column
    > div
      padding-left: 40px
      min-height: 35px

.inner-left .is-3-1.border
  border-right: 1px solid rgba(0,0,0,0.15)

</style>
