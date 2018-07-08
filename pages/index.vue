<template lang="pug">
  div#top
    helo
    post-list(:posts="posts")
</template>

<script>
import Helo from '@/components/organisms/Helo'
import PostList from '@/components/organisms/PostList'
import { mapState } from 'vuex'

export default {
  components: { helo: Helo, PostList },
  async fetch ({ store }) {
    if (store.state.post.list.length <= 0) await store.dispatch('post/fetchPosts')
  },
  computed: {
    ...mapState({
      posts: state => state.post.list
    })
  }
}
</script>

<style lang="stylus" scoped>

</style>
