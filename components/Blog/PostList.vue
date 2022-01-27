<template>
    <ul>
        <el-skeleton
            style="width: 100%"
            :loading="loading"
            animated
            :count="3"
            :throttle="1000"
        >
            <template slot="template">
                <el-skeleton-item
                    variant="image"
                    style="width: 100%; height: 15rem"
                />
                <div style="padding: 14px">
                    <el-skeleton-item variant="h2" />
                    <el-skeleton-item variant="p" />
                    <div>
                        <el-skeleton-item variant="text" />
                        <el-skeleton-item variant="text" />
                        <el-skeleton-item variant="text" />
                    </div>
                    <div class="flex">
                        <el-skeleton-item
                            variant="image"
                            style="
                                width: 50px;
                                height: 50px;
                                border-radius: 50%;
                                margin-right: 1rem;
                            "
                        />
                        <div>
                            <el-skeleton-item
                                variant="p"
                                style="width: 300px"
                            />
                            <br />
                            <el-skeleton-item
                                variant="p"
                                style="width: 300px"
                            />
                        </div>
                    </div>
                </div>
            </template>
            <template>
                <post v-for="post in posts" :key="post.id" :post="post" />
            </template>
        </el-skeleton>

        <el-pagination
            background
            layout="prev, pager, next"
            :total="150"
            class="mx-auto w-min"
            @current-change="pageNavigationHandler"
        >
        </el-pagination>
    </ul>
</template>

<script>
import Post from "./Post.vue";

export default {
    components: { Post },
    props: {
        posts: {
            type: Array,
            required: true,
        },
        loading: {
            type: Boolean,
        },
    },

    methods: {
        pageNavigationHandler(page) {
            this.$router.push(`${this.$route.path}?page=${page}`);
        },
    },
};
</script>
