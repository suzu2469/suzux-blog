<template lang="pug">
  section.section
    .container
      lined-heading
        h1.title Articles
      .columns.post-wrap
        p(v-if="posts.length <= 0").is-size-6 まだ投稿はありません（すまん）
        template(v-else)
          listed-post(v-for="(post, index) in posts", :post="post", index="index").is-one-third.column
</template>

<script>
import ListedPost from '@/components/molecules/ListedPost'
import LinedHeading from '@/components/atoms/LinedHeading'

export default {
  components: { ListedPost, LinedHeading },
  props: ['posts']
}
</script>

<style lang="stylus" scoped>
.post-wrap
  margin-top 30px
</style>
