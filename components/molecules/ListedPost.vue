<template lang="pug">
  article.is-one-third.post-one
    h1.title {{ post.title }}
    p.desc {{ post.body }}
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="stylus" scoped>
.post-one
  padding 30px
</style>
