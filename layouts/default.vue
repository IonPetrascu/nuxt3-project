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
<style scoped lang="scss">
  @use '~/assests/scss/app.scss'

</style>
