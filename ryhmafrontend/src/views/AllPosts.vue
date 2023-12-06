<template>
  <div id="content">
    <div class="sidebar"></div>
   <div id="posts" class="posts">
      <ul>
        <div class="post" v-for="post in posts" :key="post.id">
          <!-- / We are putting an anchor for each post, when we click on it, we will be directed to the specific post view (/apost/) /  -->
          <a class="post" :href="'/api/apost/' + post.id">
            <div class="postHeader">
              <p class="postDate"> {{ post.date }} </p>
            </div>
            <p class="postText"> {{ post.body }} </p>
          </a>
        </div>
      </ul>
      <div class="postButtonContainer">
        <button @click="addPost" class="postPageButton" to="/api/addpost">Add a Post</button>
        <button @click="deletePosts" class="postPageButton">Delete all</button>
      </div>
    </div>
    <div class="sidebar"></div>
  </div>
</template>


<script>
export default {
  name: "AllPosts",
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    fetchPosts() {
      // You should remember how Fetch API works
      // fetch is a GET request unless stated otherwise. Therefore, it will fetch all posts from the database
      fetch(`http://localhost:3000/api/posts/`)
        .then((response) => response.json())
        .then((data) => (this.posts = data))
        .catch((err) => console.log(err.message));
    },
    deletePosts() {
        fetch("http://localhost:3000/api/posts", {
          method: "DELETE",
        })
        .then(this.fetchPosts())
        .catch((e) => {
          console.log(e);
          console.log("error");
        });
        this.fetchPosts();
      },
    addPost () {
      this.$router.push("/api/addpost");
    }
  },
  mounted() {
    // call fetchPosts() when this element (AllPosts) mounts 
    this.fetchPosts();
    console.log("mounted");
  },
};
</script>

