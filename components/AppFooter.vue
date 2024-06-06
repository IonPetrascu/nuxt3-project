<script lang="ts" setup>

</script>
<template>
  <footer>
    <span>
      copyright &copy;
    </span>
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/about">About</nuxt-link></li>
    </ul>
  </footer>
</template>
<style scoped>
footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 0 auto;
  padding: 40px 0px;
}

ul {
  display: flex;
  gap: 20px;
}
</style>
