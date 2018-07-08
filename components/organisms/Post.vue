<template lang="pug">
  article.section
    .container
      h1.title {{ post.title }}
      section.post-styled(v-html="markedBody")
</template>

<script>
import marked from 'marked'

export default {
  props: ['post'],
  computed: {
    markedBody() {
      return marked(this.post.body)
    }
  }
}
</script>

<style lang="stylus" scoped>
.post-styled
  h1
    font-size 1.5em
    
// なんかいい感じのスタイル
</style>
