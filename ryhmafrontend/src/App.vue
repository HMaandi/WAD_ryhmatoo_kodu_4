<template>
  <div>
    <nav class="header">
      <router-link to="/api/allposts" class="routerLink">Home</router-link> |
      <router-link to="/api/about" class="routerLink">Contacts</router-link>
    </nav>
    <router-view />
    <FooterComp />
  </div>
</template>

<script>
  import FooterComp from "@/components/FooterComp.vue";
  export default {
    name: "App",
    components: {FooterComp}
  }
</script>

<style>


nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #015730;
}
body {
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0px;
    height: 5vh;
    width: 100%;
    background-color: rgb(169, 169, 169);
    border-radius: 10px;
    margin-bottom: 10px;
    font-size: large;
}
.navLinks {
    margin-left: 30px;
}
.routerLink {
  margin: 20px;
}
.navLinks > a {
    text-decoration: none;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: black;
    transition: 500ms linear;
    margin-right: 40px;
}
.navLinks > a:hover {
    color: white;
    background-color: black;
}
.profile {
    border-radius: 10px;
    height: 9vh;
    width: 9vh;
    margin-right: 30px;
}
#content {
    margin-top: 1vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.sidebar {
    background-color: rgb(169, 169, 169);
    border-radius: 10px;
}
@media screen and (min-width: 800px) {
    .sidebar {
        width: 0vw;
    }
}
@media screen and (min-width: 1000px) {
    .sidebar {
        width: 20vw;
    }
}
.posts {
    flex-direction: column;
    justify-content: center;
    
}
.post {
    text-decoration: none;
    margin: 5px;
    background-color: rgb(216, 216, 216);
    border-radius: 5px;
    width: 50vw;
}
.postHeader {
  color: black;
    display: flex;
    flex-direction: row;
    justify-content: right;
    padding: 10px;
}
.postFooter {
    display: flex;
    flex-direction: row;
    padding: 10px;
}

.postProfile {
    border: 1px solid black;
    margin-left: 5px;
    margin-top: 5px;
    height: 10%;
    width: 10%;
    border-radius: 5px;
}
.postPic {
    margin-left: 25%;
    height: 50%;
    width: 50%;
    border: 1px solid black;
}
.postText {
  color: black;
    margin-left: 10px;
}
.likeButton {
    margin-left: 10px;
    margin-right: 15px;
    margin-bottom: 5px;
    height: 5%;
    width: 5%;
}

footer {
    height: 5vh;
    background-color: rgb(169, 169, 169);
    border-radius: 10px;
    margin-top: 5px;
    bottom: 0px;
}
footer > p{
    color: #ccc;
}
.postButtonContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.postPageButton {
    background-color: rgb(152, 176, 255);
    border-radius: 5px;
    text-decoration: none;
    color: black;
    font-size: medium;
    border: 2px solid black;
}
#dropdown-content{
    position: absolute;
    width: 15vw;
    right: 0px;
    top: 10vh;
    display: none;
    margin: 10px;
    background-color: rgb(236, 236, 236);
    border-radius: 5px;
    padding: 10px;
    
}
.form{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(169, 169, 169);
}
.signup-form {
      background-color: rgb(233, 232, 188);
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      width: 300px;
      margin-top: 10%;
      margin-bottom: 10%;
    }

    .signup-form label {
        text-align: left;
        display: block;
        margin-bottom: 8px;
    }

    .signup-form input {
      width: 100%;
      padding: 8px;
      margin-bottom: 16px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    .signup-form button {
      background-color: #3253e9;
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .signup-form button:hover {
      background-color: #656865;
    }
</style>
