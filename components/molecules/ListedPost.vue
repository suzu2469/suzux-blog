<template lang="pug">
  article.is-one-third.post-one
    nuxt-link(:to="'/posts/'+post.id").block-link
      h1.title {{ post.title }}
      p.desc {{ post.body }}
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="stylus" scoped>
.desc
  height 3em
  display --webkit-box
  -webkit-box-orient vertical
  -webkit-line-clamp 2
  overflow hidden
.post-one
  padding 30px
.block-link
  display block
</style>
