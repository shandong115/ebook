<template>
  <div class="menu-bar">
    <transition name="slide-up">
      <div class="menu-wrapper" :class="{'hide-box-shadow': ifShowSetting || !ifTitleAndMenuShow}" v-show="ifTitleAndMenuShow">
        <div class="icon-wrapper">
          <span class="icon-menu icon" @click="showSetting(3)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-progress icon" @click="showSetting(2)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-bright icon" @click="showSetting(1)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-a icon" @click="showSetting(0)">A</span>
        </div>
      </div>
    </transition>
    <menu-bar-setting-view v-show="ifShowSetting"
                           :showTag="showTag"
                           :fontSizeList="fontSizeList"
                           :defaultFontSize="defaultFontSize"
                           :themeList="themeList"
                           :defaultTheme="defaultTheme"
                           :bookAvailable="bookAvailable"
                           @SetFontSize="SetFontSize"
                           @setTheme="setTheme"
                           @onProgressChange="onProgressChange"></menu-bar-setting-view>
    <catalog-view v-show="ifShowCatalog"
                  :bookAvailable="bookAvailable"
                  :navigation="navigation"
                  @jumpTo="jumpTo"></catalog-view>
    <transition name="fade">
      <div class="content-mask" v-show="ifShowCatalog"
            @click="hideCatalog"></div>
    </transition>
  </div>

</template>

<script>
import CatalogView from '@/components/Catalog'
import MenuBarSettingView from '@/components/MenuBarSetting'

export default {
  components: {
    CatalogView,
    MenuBarSettingView
  },
  props: {
    ifTitleAndMenuShow: {
      type: Boolean,
      default: false
    },
    fontSizeList: Array,
    defaultFontSize: {
      type: Number,
      default: 16
    },
    themeList: Array,
    defaultTheme: {
      type: Number,
      default: 0
    },
    bookAvailable: Boolean,
    navigation: Object
  },
  data() {
    return {
      ifShowSetting: false,
      showTag: 0,
      ifShowCatalog: false
    }
  },
  methods: {
    hideSetting() {
      this.ifShowSetting = false
    },
    hideCatalog() {
      this.ifShowCatalog = false
    },
    jumpTo(href) {
      this.$emit('jumpTo', href)
    },
    onProgressChange(progress) {
      this.$emit('onProgressChange', progress)
    },
    showSetting(tag) {
      if (tag === 3) {
        this.ifShowSetting = false
        this.ifShowCatalog = true
      } else {
        this.ifShowSetting = true
        this.showTag = tag
      }
    },
    SetFontSize(fontSize) {
      this.$emit('SetFontSize', fontSize)
    },
    setTheme(index) {
      this.$emit('setTheme', index)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/global';
  .menu-bar {
    .menu-wrapper{
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: px2rem(48);
      z-index: 101;
      display: flex;
      box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15);
      &.hide-box-shadow {
        box-shadow: none
      }
      background: white;
      .icon-wrapper {
        flex: 1;
        @include center;
        .icon-progress .icon-bright {
          font-size: px2rem(28);
        }
      }
    }
 .content-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    z-index: 102;
    background: rgba(51, 51, 51, .8);
 }
  }

</style>
