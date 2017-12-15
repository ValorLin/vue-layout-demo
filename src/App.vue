<template>
  <router-view id="app" name="layout">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </router-view>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
</style>
