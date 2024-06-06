<script lang="ts" setup>
  const props = defineProps({
    post:{
      type:Object,
      require:true
    }
  })
</script>
<template>
  <article class="card mb-7 mt-1">
    <h3 class="text-xl mb-2">
      <nuxt-link :to="`/blog/${post.id}`">{{ post.title }}</nuxt-link>
    </h3>
    <p class="text-sm">{{ post.description.substring(0, 100) }}...</p>
    <span class="block text-sm mt-2 mb-2">Created by: {{ post.author }}</span>
    <time class="block text-sm text-blue-500"><span class="fa fa-clock"></span> {{ post.time }}</time>
    <NuxtLink :to="`/blog/${post.id}`">Read more</NuxtLink>
  </article>
</template>
<style scoped></style>
