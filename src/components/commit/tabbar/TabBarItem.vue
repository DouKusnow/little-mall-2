<template>
  <div class="tab-bar-item"   @click="itemClick">
    <div v-if="!activeItem"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "TabBarItem",
      methods: {
          itemClick() {
            this.$router.replace(this.path);
          }
           },
        computed:{
          activeItem() {
              return this.$route.path.indexOf(this.path) !== -1
            },
          activeStyle(){
              return this.activeItem ? {color: this.activeColor} : {}
          }

        },
        data(){
          return {
          }
    },
        props: {
          path: String,
          activeColor: {
            type: String,
            default: 'red'
          }

        }

    }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item svg {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
