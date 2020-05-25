<template>
  <div class="menu-bar">
    <transition name="slide-up">
      <div class="menu-wrapper"
      :class="{'hide-box-shadow':IfSettingShow || !IfTitleAndBarShow}"
      v-show="IfTitleAndBarShow">
        <div class="icon-wrapper">
          <span class="icon-menu icon"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-progress icon"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-bright icon"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-a icon" @click="showSetting">A</span>
        </div>
      </div>
    </transition>
    <transition name="slide-up">
      <div class="setting-wrapper" v-show="IfSettingShow">
        <div class="setting-font-size"></div>
      </div>
    </transition>
  </div>

</template>

<script>
export default {
  props: {
    IfTitleAndBarShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      IfSettingShow: false
    }
  },
  methods: {
    showSetting() {
      this.IfSettingShow = true
    },
    hideSetting() {
      this.IfSettingShow = false
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
    .setting-wrapper {
      position: absolute;
      bottom: px2rem(48);
      left: 0;
      width: 100%;
      height: px2rem(60);
      background: white;
      box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15);
      .setting-font-size {

      }
    }
  }

</style>
