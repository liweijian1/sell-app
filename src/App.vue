<template>
  <div>
    <v-header></v-header>
    <div class="tab">
      <div class="item-tab">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="item-tab">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="item-tab">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue';
  export default{
      components: {
        'v-header': header
      }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .tab
       display : flex
       width :100%
       height : 40px
       line-height : 40px
       .item-tab
           flex :1
           text-align : center
</style>
