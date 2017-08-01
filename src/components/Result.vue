<template lang="pug">
  .result
    h1(v-if="this.$store.state.renderStatus") Show this Msg
</template>

<script>
export default {
  name: 'table',
  data () {
    return {
    }
  }
}
</script>

<style lang="sass">

</style>
