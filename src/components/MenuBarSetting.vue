<template>
  <transition name="slide-up">
    <div class="menu-bar-setting-wrapper">
      <div class="setting-font-size" v-if="showTag === 0">
        <div class="preview" :style="{fontSize:fontSizeList[0].fontSize+'px'}">A</div>
        <div class="select">
          <div class="select-wrapper"
            v-for="(item, index) in fontSizeList" :key="index"
            @click="SetFontSize(item.fontSize)">
            <div class="line"></div>
            <div class="pointer-wrapper">
              <div class="point"
                v-show="defaultFontSize === item.fontSize">
                <div class="small-point"></div>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>

        <div class="preview" :style="{fontSize:fontSizeList[fontSizeList.length-1].fontSize+'px'}">A</div>
      </div>
      <div class="setting-theme" v-else-if="showTag === 1">
        <div class="setting-theme-item"
          v-for="(item, index) in themeList" :key="index"
          @click="setTheme(index)">
          <div class="preview" :style="{background:item.style.body.background}"
            :class="{'no-border': item.style.body.background !== 'white'}"></div>
          <div class="text" :class="{'selected': index === defaultTheme}">{{item.name}}</div>
        </div>
      </div>
      <div class="setting-progress" v-else-if="showTag === 2">
        <div class="progress-wrapper">
          <input class="progress" type="range"
                                  max="100"
                                  min="0"
                                  step="1"
                                  @change="onProgressChange($event.target.value)"
                                  @input="onProgressInput($event.target.value)"
                                  :value="progress"
                                  :disabled="!bookAvailable"
                                  ref="progress"/>
        </div>
        <div class="text-wrapper">
          <span>{{bookAvailable ? progress + '%' : '加载中...'}}</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      progress: 0
    }
  },
  props: {
    ifShowSetting: Boolean,
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
    showTag: {
      type: Number,
      default: 0
    }
  },
  methods: {
    onProgressChange(progress) {
      this.$emit('onProgressChange', progress)
    },
    onProgressInput(process) {
      this.progress = process
      this.$refs.progress.style.backgroundSize = `${this.progress}% 100%`
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

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../assets/styles/global";
  .menu-bar-setting-wrapper {
    position: absolute;
    bottom: px2rem(48);
    left: 0;
    width: 100%;
    height: px2rem(60);
    background: white;
    z-index: 101;
    box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15);
    display: flex;
    .setting-font-size {
      display: flex;
      height: 100%;
      width: 100%;
      .preview {
        flex: 0 0 px2rem(40);
        @include center;
      }
      .select {
        flex: 1;
        display: flex;
        .select-wrapper {
          flex: 1;
          display: flex;
          align-items: center;
          &:first-child {
            .line {
              &:first-child {
                border-top: none;
              }
            }
          }
          &:last-child {
            .line {
              &:last-child {
                border-top: none;
              }
            }
          }
          .line {
            flex: 1;
            height: 0;
            border-top: px2rem(1) solid #ccc;
          }
          .pointer-wrapper {
            position: relative;
            flex: 0 0 0;
            width: 0;
            height: px2rem(7);
            border-left: px2rem(1) solid #ccc;
            .point {
              position: absolute;
              top: px2rem(-6.5);
              left: px2rem(-10);
              width: px2rem(20);
              height: px2rem(20);
              border-radius: 50%;
              background: white;
              border: px2rem(1) solid #ccc;
              box-shadow: 0 px2rem(4) px2rem(4) rgba(0, 0, 0, .15);
              @include center;
              .small-point {
                  width: px2rem(5);
                  height: px2rem(5);
                  background: black;
                  border-radius: 50%;
              }
            }
          }
        }
      }
    }
    .setting-theme {
      display: flex;
      height: 100%;
      width: 100%;
      .setting-theme-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: px2rem(5);
        box-sizing: border-box;
        .preview {
          flex: 1;
          border: px2rem(1) solid #ccc;
          box-sizing: border-box;
          &.no-border {
            border: none;
          }
        }
        .text {
          flex: 0 0 px2rem(20);
          font-size: px2rem(14);
          color: #ccc;
          @include center;
          &.selected {
            color: #222;
          }
        }
      }
    }
    .setting-progress {
      position: relative;
      width: 100%;
      height: 100%;
      .progress-wrapper {
        width: 100%;
        height: 100%;
        padding: 0 px2rem(30);
        box-sizing: border-box;
        @include center;
        .progress {
          width: 100%;
          height: px2rem(2);
          -webkit-appearance: none;
          background: -webkit-linear-gradient(#999, #999) no-repeat, #ddd;
          background-size: 0 100%;
          &:focus {
            outline: none;
          }
          &::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: px2rem(20);
            height: px2rem(20);
            border-radius: 50%;
            box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .15);
            background: white;
            border: px2rem(1) solid #ddd;
          }
        }
      }
      .text-wrapper {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        font-size: px2rem(12);
        text-align: center;
        color: #333;
      }
    }
  }
</style>
