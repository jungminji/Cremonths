<template lang="pug">
  .info
    slot
    p Designer: {{designer}}
    p Developer: {{developer}}
    p Bulit with
    ul
      li(v-for="skill in skills") {{ skill }}
</template>

<script>
export default {
  data () {
    return {
      designer: 'Erica Niu',
      developer: 'Jungmin Ji',
      skills: ['Vue', 'Vuex', 'pug', 'Sass']
    }
  }
}
</script>

<style lang="sass">
ul
  padding-left: 10px
  list-style: none
</style>
