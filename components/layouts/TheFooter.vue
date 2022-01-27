<template>
    <div class="container flex justify-between p-5 border-t-2 border-slate-500">
        <nav class="w-1/2">
            <ul class="flex gap-10 w-full justify-start">
                <li>
                    <nuxt-link
                        to="/about"
                        class="font-semibold p-1 hover:text-[#1d52ff]"
                    >
                        About Us
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link
                        to="/blog"
                        class="font-semibold p-1 hover:text-[#1d52ff]"
                    >
                        Blog
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link
                        to="#"
                        class="font-semibold p-1 hover:text-[#1d52ff]"
                    >
                        License
                    </nuxt-link>
                </li>
            </ul>
        </nav>
        <div class="font-semibold">Made for a better web</div>
    </div>
</template>

<script>
export default {};
</script>
