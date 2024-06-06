<script lang="ts" setup>
const {params} = useRoute()
const id = params.id


</script>
<template>
<div>
  <h3 >
      <nuxt-link class="text-xl text-gray-500 no-underline mb-2 text-center" to="#"> Post Title {{  id}}</nuxt-link>
    </h3>
    <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, ipsum.</p>
    <span class="block text-sm mt-2 mb-2">Created by: John Doe</span>
    <time class="block text-sm text-blue-500"><span class="fa fa-clock"></span> 2023-10-01</time>
</div>
</template>
<style scoped>

</style>
