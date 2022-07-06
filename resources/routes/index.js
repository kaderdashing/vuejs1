import { createRouter, createWebHistory } from "vue-router";
import PostIndex from "../components/PostIndex.vue";

const routes = [{
    path: '/',
    name: 'welcome',
    component: PostIndex
}];
console.log("2")
export default createRouter({
    history: createWebHistory(),
    routes
})