<script lang="ts" setup>
  const config = useRuntimeConfig()
  console.log(config.public.apiBase);


  if(process.server){
    console.log(config.secretKey);

  }
</script>
<template>
<div >
  <h1 class="text-3xl mb-4">Latest Posts</h1>
  <section>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
  </section>
</div>
</template>
<style scoped>

</style>
