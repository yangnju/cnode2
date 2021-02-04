<template>
  <div class="postlist">
    <p>这是helloworld组件</p>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <img :src="post.author.avatar_url">
        <span class="count">
          <span class="repay_count">{{ post.reply_count }}</span>/
          <span class="visit_count">{{ post.visit_count }}</span>
        </span>
        <!-- 当post.good是真，元素类名是put_good -->
        <span class="tab" :class="[{put_good:(post.good === true),put_top:(post.top === true),topic_tab:(post.good !== true && post.top !== true)}]">
          <span>{{post | tabFormatter}}</span>
        </span>
        <span class="title">{{ post.title }}</span>
        <span class="last_reply">{{ post.last_reply_at }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      posts: []
    }
  },
  methods: {
    getData() {
      this.$http.get('https://cnodejs.org/api/v1/topics?limit=20', {
        limit: 5
      }).then(res => {
        this.posts = res.data.data
      }).catch(function (err) {
        console.log(err)
      })
    }
  },
  beforeMount() {
    this.getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 40px;
}
.count{
  margin: 0 20px;
}
.title{
  margin: 0 20px;
}
.tab{
  color: red;
}
</style>
