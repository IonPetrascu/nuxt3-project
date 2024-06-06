<script lang="ts" setup>
</script>
<template>
  <header class="header">
    <div>
      <nuxt-link to="/">
        <img width="100px" height="100px" src="~/assets/imgs/logo.webp" alt="vawe">
      </nuxt-link>
    </div>
    <nav >
      <ul class="list">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/blog">Blog</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
      </ul>
    </nav>
    <div>
      <nuxt-link to="/account/profile">Profile</nuxt-link>
    </div>
  </header>
</template>
<style scoped>
.header{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.list{
  display: flex;
  align-content: center;
  gap: 40px;
}
</style>
