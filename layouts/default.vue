<script lang="ts" setup>

</script>
<template>
<div class="container">
    <AppHeader />
    <div class="content">
      <slot/>
    </div>
    <AppFooter />
  </div>
</template>
<style scoped>
  .content{
    min-height: 400px;
  }
</style>
