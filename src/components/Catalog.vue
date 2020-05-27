<template>
  <transition name="slide-right">
    <div class="catalog">
      <div class="catalog-wrapper" v-if="bookAvailable">
        <div class="catalog-item" v-for="(item, index) in navigation.toc" :key="index" @click="jumpTo(item.href)">
          <span class="text">{{item.label}}</span>
        </div>
      </div>
      <div class="empty" v-else>
        <span>加载中...</span>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    bookAvailable: Boolean,
    navigation: Object
  },
  methods: {
    jumpTo(href) {
      this.$emit('jumpTo', href)
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../assets/styles/global";
  .catalog {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 102;
    width: 80%;
    height: 100%;
    background: white;
    .catalog-wrapper {
      width: 100%;
      height: 100%;
      overflow: auto;
      .catalog-item {
        padding: px2rem(20) px2rem(15);
        border-bottom: px2rem(1) solid #f4f4f4;
        .text {
          font-size: px2rem(14);
          color: #333;
        }
      }
    }
    .empty {
      width: 100%;
      height: 100%;
      @include center;
      font-size: px2rem(16);
      color: #333;
    }
  }
</style>
