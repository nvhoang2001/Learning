<template>
    <li class="my-20">
        <div
            class="h-60 bg-center bg-no-repeat bg-cover rounded-xl my-12"
            :style="{
                backgroundImage: `url(${post.image})`,
            }"
        ></div>
        <h2 class="text-xl font-semibold hover:text-[#0bf]">
            <nuxt-link to="#">
                {{ post.title }}
            </nuxt-link>
        </h2>
        <p class="text-gray-400 mt-5">{{ post.date }}</p>
        <el-divider></el-divider>
        <p class="text-base">
            <span
                class="truncate whitespace-normal max-h-[4.5rem] max-w-full inline-block"
            >
                {{ post.previewContent }}
            </span>
            <nuxt-link class="font-bold hover:text-[#0bf]" to="#">
                <i class="fas fa-caret-right"></i> Read more
            </nuxt-link>
        </p>
        <el-divider></el-divider>

        <figure class="flex items-center">
            <img
                :src="post.author.image"
                alt=""
                class="h-[50px] w-[50px] rounded-full mr-4"
            />
            <figcaption>
                <p>
                    By:
                    <strong class="font-bold">{{ post.author.name }}</strong>
                </p>
                <p>{{ post.author.position }}</p>
            </figcaption>
        </figure>
    </li>
</template>

<script>
export default {
    name: "Post",
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
};
</script>
