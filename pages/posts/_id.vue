<template lang="pug">
  div#post
    post
</template>

<script>
import { mapState } from 'vuex'
import Post from '@/components/organisms/Post'

export default {
  components: { post: Post },
  async fetch({ store, redirect, params }) {
    if (store.state.post.list.lenght <= 0) await store.dispatch('post/fetchPosts')
    const isExists = store.state.post.list.find(post => post.id == params.id)
    if (!isExists) redirect('/')
  },
  computed: {
    ...mapState({
      posts: state => state.post.list
    }),
    currentPost() {
      return this.posts.find(post => post.id == this.$route.params.id)
    }
  }
}
</script>
