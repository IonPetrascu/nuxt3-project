<script lang="ts" setup>

</script>
<template>
<div class=" container mx-auto my-4 px-4">
    <AppHeader />
    <nav>
      <ul>
        <li><a href="#">Update Profile</a></li>
        <li><a href="#">view Porfile</a></li>
      </ul>
    </nav>
    <div class="content">
      <slot/>
    </div>
    <AppFooter />
  </div>
</template>
<style scoped>
</style>
