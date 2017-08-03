<template lang="pug">
  .result-header
    .row
      .is-5-1 Amount
      .is-5-1 Month
      .is-5-1 Rate (&#37;)
      .is-5-1 Total Fee
      .is-5-1 Total Interest
    .row
      .is-5-1 {{ '&#36;' + getAmount }}
      .is-5-1 {{ getMonth }}
      .is-5-1 {{ getRate + '&#37;' }}
      .is-5-1
      .is-5-1

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'result-header',
  computed: {
    ...mapGetters([
      'getAmount',
      'getMonth',
      'getRate'
    ])
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="sass" scoped>
$container-width: 960px

.result-header
  width: $container-width
  background: #333
  height: 50px
  box-sizing: border-box
  font-family: 'Raleway', sans-serif
  font-weight: 600
  color: #fff
.row
  width: 100%
  display: flex
.is-5-1
  width: calc(100% / 5)

</style>
