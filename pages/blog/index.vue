<script lang="ts" setup>
import {useSearchStore} from '~/stores/useSearchStore'
import { storeToRefs } from 'pinia'
useHead({
  titlle:'All posts',
  meta:[
    {
      name:'descriotion',
      content:'All post page in m blog portal'
    },
      {
      name:'og:descriotion',
      content:'All post page in m blog portal'
    }
  ]
})

const store = useSearchStore()
const {posts,page,limit,loading,totalFound} = storeToRefs(store)

const a = await store.fetchPosts()
</script>
<template>
<div>
  <h1 class="text-3xl mb-4">All posts</h1>
  <span v-if="loading">LOADING DATA...</span>
  <section v-else-if="posts">
    <div>
      <Post v-for="post in posts" :key="post.id" :post="post"/>
    </div>
  </section>
</div>
</template>
<style scoped>

</style>
