<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
  import MainTabBar from 'components/content/mainTabbar/MainTabBar'
  export default {
    components: {
      MainTabBar
    }
  }
</script>
<style>

</style>
