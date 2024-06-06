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
.container{
  margin: 0 auto;
}
.content{
  padding-top: 40px;
}

</style>
