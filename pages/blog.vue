<template>
    <el-main>
        <h1 class="text-2xl font-semibold">The Blog</h1>
        <div class="mt-10 flex flex-wrap justify-between">
            <carosel :posts="posts" class="w-full" />
            <post-list class="w-2/3 px-5" :posts="posts" :loading="loading" />
            <aside class="w-1/4">
                <div class="my-20">
                    <h3 class="text-xl">About</h3>
                    <el-divider></el-divider>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quis illum quibusdam adipisci ea velit itaque
                        perferendis deserunt, in fugit blanditiis numquam
                        officiis ad esse nulla possimus eligendi quisquam
                        praesentium dolorem?
                    </p>
                    <nuxt-link class="text-[#0bf]" to="#">Learn more</nuxt-link>
                </div>
                <div class="my-20">
                    <h3 class="text-xl">Follow Us</h3>
                    <el-divider></el-divider>
                    <ul class="flex">
                        <li class="mx-2.5">
                            <nuxt-link class="brand-share" to="#">
                                <i class="fab fa-twitter-square"></i>
                            </nuxt-link>
                        </li>
                        <li class="mx-2.5">
                            <nuxt-link class="brand-share" to="#">
                                <i class="fab fa-facebook-square"></i>
                            </nuxt-link>
                        </li>
                        <li class="mx-2.5">
                            <nuxt-link class="brand-share" to="#">
                                <i class="fab fa-youtube-square"></i>
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    </el-main>
</template>

<script>
import PostList from "~/components/Blog/PostList.vue";
import Carosel from "~/components/Blog/Carosel.vue";
export default {
    name: "BlogPage",
    components: { PostList, Carosel },

    data() {
        return {
            loading: true,
            posts: [],
        };
    },
    mounted() {
        // Fake data loading
        setTimeout(() => {
            this.posts = [
                {
                    id: "1",
                    title: "Everything you need to know about Remote Config's latest personalization feature",
                    date: "January 26, 2022",
                    image: "https://www.creative-tim.com/blog/content/images/size/w960/2022/01/which-development-job-is-right-for-you.jpg",

                    author: {
                        name: "Jon Mensing",
                        position: "Product Manager",
                        image: "https://blogger.googleusercontent.com/img/a/AVvXsEhZu82AzTBpjuNNxYlcUlQK3VBseORpb_kDXpNYNkM1x7xkoMddMr0BVsi7aJxCOcaSIAixjKixRbn37du1qOcShzLniahJ-lrZlFhLJBQ-3oq49RLWaU7gQtHvjacFVxvgKm7pG7cije9QZQmcJ_Fv6JnQjqmBNFSTOJ8SyoKAKxq-VngaRikswYjcsg",
                    },
                    previewContent:
                        "An important part of turning your app into a business is to optimize your user experience to drive the bottom line results you want. A popular way to do this is through manual experimentation, which involves setting up A/B tests for different components of your app and finding the top performing variant. Now, you can save time and effort - and still maximize the objectives you want - with Remote Config's latest personalization feature. Personalization harnesses the power of machine learning to automatically find the optimal experience for each user to produce the best outcomes, taking the load off you.",
                },
                {
                    id: "2",
                    title: "Everything you need to know about Remote Config's latest personalization feature",
                    date: "January 26, 2022",
                    image: "https://www.creative-tim.com/blog/content/images/size/w750/2021/12/how-to-become-backend-developer.jpg",
                    author: {
                        name: "Jon Mensing",
                        position: "Product Manager",
                        image: "https://blogger.googleusercontent.com/img/a/AVvXsEhZu82AzTBpjuNNxYlcUlQK3VBseORpb_kDXpNYNkM1x7xkoMddMr0BVsi7aJxCOcaSIAixjKixRbn37du1qOcShzLniahJ-lrZlFhLJBQ-3oq49RLWaU7gQtHvjacFVxvgKm7pG7cije9QZQmcJ_Fv6JnQjqmBNFSTOJ8SyoKAKxq-VngaRikswYjcsg",
                    },
                    previewContent:
                        "An important part of turning your app into a business is to optimize your user experience to drive the bottom line results you want. A popular way to do this is through manual experimentation, which involves setting up A/B tests for different components of your app and finding the top performing variant. Now, you can save time and effort - and still maximize the objectives you want - with Remote Config's latest personalization feature. Personalization harnesses the power of machine learning to automatically find the optimal experience for each user to produce the best outcomes, taking the load off you.",
                },
                {
                    id: "3",
                    title: "Everything you need to know about Remote Config's latest personalization feature",
                    date: "January 26, 2022",
                    image: "https://www.creative-tim.com/blog/content/images/size/w750/2021/11/frontend-developer.jpg",
                    author: {
                        name: "Jon Mensing",
                        position: "Product Manager",
                        image: "https://blogger.googleusercontent.com/img/a/AVvXsEhZu82AzTBpjuNNxYlcUlQK3VBseORpb_kDXpNYNkM1x7xkoMddMr0BVsi7aJxCOcaSIAixjKixRbn37du1qOcShzLniahJ-lrZlFhLJBQ-3oq49RLWaU7gQtHvjacFVxvgKm7pG7cije9QZQmcJ_Fv6JnQjqmBNFSTOJ8SyoKAKxq-VngaRikswYjcsg",
                    },
                    previewContent:
                        "An important part of turning your app into a business is to optimize your user experience to drive the bottom line results you want. A popular way to do this is through manual experimentation, which involves setting up A/B tests for different components of your app and finding the top performing variant. Now, you can save time and effort - and still maximize the objectives you want - with Remote Config's latest personalization feature. Personalization harnesses the power of machine learning to automatically find the optimal experience for each user to produce the best outcomes, taking the load off you.",
                },
                {
                    id: "4",
                    title: "Everything you need to know about Remote Config's latest personalization feature",
                    date: "January 26, 2022",
                    image: "https://www.creative-tim.com/blog/content/images/size/w960/2022/01/cover--3-.jpg",
                    author: {
                        name: "Jon Mensing",
                        position: "Product Manager",
                        image: "https://blogger.googleusercontent.com/img/a/AVvXsEhZu82AzTBpjuNNxYlcUlQK3VBseORpb_kDXpNYNkM1x7xkoMddMr0BVsi7aJxCOcaSIAixjKixRbn37du1qOcShzLniahJ-lrZlFhLJBQ-3oq49RLWaU7gQtHvjacFVxvgKm7pG7cije9QZQmcJ_Fv6JnQjqmBNFSTOJ8SyoKAKxq-VngaRikswYjcsg",
                    },
                    previewContent:
                        "An important part of turning your app into a business is to optimize your user experience to drive the bottom line results you want. A popular way to do this is through manual experimentation, which involves setting up A/B tests for different components of your app and finding the top performing variant. Now, you can save time and effort - and still maximize the objectives you want - with Remote Config's latest personalization feature. Personalization harnesses the power of machine learning to automatically find the optimal experience for each user to produce the best outcomes, taking the load off you.",
                },
                {
                    id: "5",
                    title: "Everything you need to know about Remote Config's latest personalization feature",
                    date: "January 26, 2022",
                    image: "https://www.creative-tim.com/blog/content/images/size/w960/wordpress/2020/02/material-blog-laravel-templates.jpg",
                    author: {
                        name: "Jon Mensing",
                        position: "Product Manager",
                        image: "https://blogger.googleusercontent.com/img/a/AVvXsEhZu82AzTBpjuNNxYlcUlQK3VBseORpb_kDXpNYNkM1x7xkoMddMr0BVsi7aJxCOcaSIAixjKixRbn37du1qOcShzLniahJ-lrZlFhLJBQ-3oq49RLWaU7gQtHvjacFVxvgKm7pG7cije9QZQmcJ_Fv6JnQjqmBNFSTOJ8SyoKAKxq-VngaRikswYjcsg",
                    },
                    previewContent:
                        "An important part of turning your app into a business is to optimize your user experience to drive the bottom line results you want. A popular way to do this is through manual experimentation, which involves setting up A/B tests for different components of your app and finding the top performing variant. Now, you can save time and effort - and still maximize the objectives you want - with Remote Config's latest personalization feature. Personalization harnesses the power of machine learning to automatically find the optimal experience for each user to produce the best outcomes, taking the load off you.",
                },
            ];
            this.loading = false;
        }, 3000);
    },
};
</script>

<style lang="scss" scoped>
.brand-share {
    @apply text-4xl hover:text-[#0bf];
}
</style>
