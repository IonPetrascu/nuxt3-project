<script lang="ts" setup>
const config = useRuntimeConfig()
const { params } = useRoute()

const apiBase = config.public.apiBase

//id=1  posts_p1,id=2 => post_p2
const { data: post, pending, error } = await useAsyncData(`posts_p${params.id}`, () => $fetch(`${apiBase}/posts/${params.id}`))
</script>
<template>
  <div v-if="pending">
    Loading
  </div>
  <div v-else-if="error">
    Error
  </div>
  <div v-else>
    <h3>
      <nuxt-link class="text-xl text-gray-500 no-underline mb-2 text-center" to="#">{{ post.title }}</nuxt-link>
    </h3>
    <p class="text-sm">{{ post.description }}</p>
    <span class="block text-sm mt-2 mb-2">Created by: {{ post.author }} </span>
    <time class="block text-sm text-blue-500"><span class="fa fa-clock"></span>{{ post.time }}</time>
  </div>
</template>
<style scoped></style>
