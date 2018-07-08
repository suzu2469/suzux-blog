<template lang="pug">
  div.underline
    slot
</template>

<style lang="stylus" scoped>

.underline
  position relative
  padding 0 0 1em
  &::after
    position absolute
    bottom 0
    left 0
    width 50px
    height 3px
    content ''
    display block
    background-color hsl(0, 0%, 21%)
</style>

