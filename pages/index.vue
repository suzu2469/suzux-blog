<template lang="pug">
  div#top
    helo
    post-list(:posts="posts")
</template>

<script>
import Helo from '@/components/organisms/Helo'
import PostList from '@/components/organisms/PostList'

export default {
  components: { helo: Helo, PostList },
  data () {
    return {
      posts: [
        {
          title: 'Sample',
          body: 'sample sample sample'
        },
        {
          title: 'Sample',
          body: 'sample sample sample'
        },
        {
          title: 'Sample',
          body: 'sample sample sample'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
