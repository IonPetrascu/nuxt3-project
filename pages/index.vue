<script lang="ts" setup>
const config = useRuntimeConfig()

const apiBase = config.public.apiBase
const { data: posts, pending, error } = await useFetch(`${apiBase}/posts`)
</script>
<template>
  <div>
    <h1 class="text-3xl mb-4">Latest Posts</h1>
    <section>
      <Post :key="post.id" v-for="post in posts" :post="post" />
    </section>
  </div>
</template>
<style scoped></style>
