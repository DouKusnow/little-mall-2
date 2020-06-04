<template>
    <div class="main-tab-bar">
      <tab-bar>
        <tab-bar-item path="/home">
          <svg class="icon" aria-hidden="true" slot="item-icon">
            <use xlink:href="#icon-shouye"></use>
          </svg>
          <svg class="icon" aria-hidden="true" slot="item-icon-active">
            <use xlink:href="#icon-shouye1"></use>
          </svg>
          <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/category">
          <svg class="icon" aria-hidden="true" slot="item-icon">
            <use xlink:href="#icon-classify-on"></use>
          </svg>
          <svg class="icon" aria-hidden="true" slot="item-icon-active">
            <use xlink:href="#icon-classify"></use>
          </svg>
          <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cart">
          <svg class="icon" aria-hidden="true" slot="item-icon">
            <use xlink:href="#icon-qicheqianlian-select-copy"></use>
          </svg>
          <svg class="icon" aria-hidden="true" slot="item-icon-active">
            <use xlink:href="#icon-che1"></use>
          </svg>
          <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile">
          <svg class="icon" aria-hidden="true" slot="item-icon">
            <use xlink:href="#icon-wodedangxuan-copy"></use>
          </svg>
          <svg class="icon" aria-hidden="true" slot="item-icon-active">
            <use xlink:href="#icon-wodedangxuan1-copy-copy"></use>
          </svg>
          <div slot="item-text">我的</div>
        </tab-bar-item>
      </tab-bar>
    </div>
</template>

<script>
  import TabBar from 'components/commit/tabbar/TabBar'
  import TabBarItem from 'components/commit/tabbar/TabBarItem'
    export default {
        name: "MainTabBar",
        components: {
          TabBar,
          TabBarItem
        }
    }
</script>

<style scoped>
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;

  }
</style>
