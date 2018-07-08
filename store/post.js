export const state = () => ({
  list: []
})

export const mutations = {
  SET_POSTS(state, posts) {
    state.list = posts
  }
}

export const actions = {
  async fetchPosts({
    commit
  }) {
    const posts = await this.$axios.$get('/api/posts')
    commit('SET_POSTS', posts)
  }
}