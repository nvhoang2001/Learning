<template>
    <el-main>
        <div class="pt-12 px-8 about-page">
            <h1 class="text-center text-[#ffa400] text-3xl font-semibold mb-5">
                This is "About Me" Page!
            </h1>
            <p
                class="text-center font-light text-sm sm:text-base md:text-lg xl:text-2xl text-[#07a787] mb-35"
            >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
                officiis ab voluptatibus assumenda error quas deleniti eius?
                Suscipit, numquam? Quis aliquid non animi numquam amet voluptas
                dolorum sunt aspernatur commodi?
            </p>
            <div
                class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-7 xl:gap-y-0 max-w-6xl mx-auto pb-5 px-[15px]"
            >
                <div v-for="i in 3" :key="i">
                    <div class="h-96 mb-5">
                        <img
                            src="https://images.unsplash.com/photo-1641810780702-57d275dfdc59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                            alt=""
                            class="w-full h-full rounded-xl object-cover"
                        />
                    </div>
                    <h3 class="text-center font-semibold text-xl mb-3">
                        Enjoy the great cold
                    </h3>
                    <span class="block text-center text-gray-500 text-base"
                        >6,789 properties</span
                    >
                </div>
            </div>
            <div class="mx-auto max-w-[1200px] grid grid-cols-4 gap-x-5 p-5">
                <div
                    class="px-5 py-8 rounded-lg border border-[#eee] text-center bg-white dark:bg-[#0f0d58]"
                    v-for="i in 4"
                    :key="i"
                >
                    <img
                        src="https://free3dicon.com/wp-content/uploads/2021/11/like_perspective_matte_s-2-300x300.png.webp"
                        alt=""
                        class="mb-5 max-w-[100px] mx-auto"
                    />
                    <h3 class="text-lg font-semibold dark:text-white">
                        Recommendation
                    </h3>
                    <div
                        class="text-sm leading-normal font-normal text-[#949494] dark:text-white"
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Non provident aut dolorem, tempore blanditiis illum, nam
                        fugiat similique autem at debitis error, reprehenderit
                        consectetur obcaecati quasi dignissimos cum pariatur
                        nemo!
                    </div>
                </div>
            </div>
        </div>
    </el-main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,700;1,300;1,500;1,700&family=Poppins:wght@300;400;600;700&display=swap");

.about-page {
    font-family: "Poppins", sans-serif;
}
</style>
