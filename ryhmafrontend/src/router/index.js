import { createRouter, createWebHistory } from 'vue-router'
import AllPosts from "../views/AllPosts.vue";
import APost from "../views/APost.vue";
import AddPost from "../views/AddPost.vue";
import AboutView from "../views/AboutView";
import SignupView from "../views/SignupView";

const routes = [{
        path: '/',
        name: 'AllPosts',
        component: () =>
            import ("../views/AllPosts.vue")
    },
    {
        path: "/api/allposts",
        name: "AllPosts",
        component: AllPosts,
    },
    {
        path: "/api/apost/:id",
        name: "APost",
        component: APost,
    },
    {
        path: "/api/addpost",
        name: "AddPost",
        component: AddPost,
    },
    {
        path: "/api/about",
        name: "AboutView",
        component: AboutView,
    },
    { //will route to AllPosts view if none of the previous routes apply
        path: "/:catchAll(.*)",
        name: "AllPosts",
        component: AllPosts,
    },
    {
        path: "/api/signup",
        name: "Sign Up",
        component: SignupView,
    },
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
