<script lang="ts" setup>
const config = useRuntimeConfig()

const apiBase = config.public.apiBase
const { data: posts, pending, error } = await useFetch(`${apiBase}/posts`)
</script>
<template>
  <div>
    <h1 class="text-3xl mb-4">Latest Posts</h1>
    <div v-if="pending">
      Loading data...
    </div>
    <div v-else-if="error" class="text-red-400">
         <span class="fa fa-exclamation-circle"></span>
Error loading resulte
    </div>
    <section v-else>
      <Post :key="post.id" v-for="post in posts" :post="post" />
    </section>
  </div>
</template>
<style scoped></style>
