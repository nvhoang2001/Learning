<template>
    <el-carousel :interval="4000" type="card" trigger="click" height="300px">
        <el-carousel-item v-for="post in posts" :key="post.id">
            <div>
                <nuxt-link to="#" :title="post.title">
                    <img :src="post.image" />
                </nuxt-link>
            </div>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
    props: {
        posts: {
            type: Array,
            required: true,
        },
    },
};
</script>
