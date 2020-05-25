<template>
  <div class="ebook">
    <!-- <title-bar :IfTitleAndBarShow="IfTitleAndBarShow"></title-bar> -->
    <TitleBar
    :IfTitleAndBarShow="IfTitleAndBarShow"></TitleBar>
    <div class="read-wrapper">
      <div id="read"></div>
      <div class="mask">
        <div class="left" @click="prevPage"></div>
        <div class="center" @click="poMenu"></div>
        <div class="right" @click="nextPage"></div>
      </div>
    </div>
    <menu-bar :IfTitleAndBarShow="IfTitleAndBarShow"
      ref="MenuBar"></menu-bar>
    <!-- <MenuBar
    :IfTitleAndBarShow="IfTitleAndBarShow"></MenuBar> -->
  </div>
</template>

<script>
import Epub from 'epubjs'
import TitleBar from '@/components/TitleBar'
import MenuBar from '@/components/MenuBar'

const DOWNLOAD_URL = '/static/speaking-cui.epub'

export default{
  components: {
    TitleBar,
    MenuBar
  },
  data() {
    return {
      IfTitleAndBarShow: false
    }
  },
  methods: {
    // 电子书的解析和渲染
    showEpub () {
      // 生成book对象
      this.book = new Epub(DOWNLOAD_URL)
      // 生成redition对象
      this.rendition = this.book.renderTo('read', {
        width: window.innerWidth,
        height: window.innerHeight
      })
      // 通过redition.display方法渲染电子书
      this.rendition.display()
    },
    prevPage() {
      if (this.rendition) {
        this.rendition.prev()
      }
    },
    nextPage() {
      if (this.rendition) {
        this.rendition.next()
      }
    },
    poMenu() {
      this.IfTitleAndBarShow = !this.IfTitleAndBarShow
      if (!this.IfTitleAndBarShow) {
        this.$refs.MenuBar.hideSetting();
      }
    }
  },
  mounted() {
    this.showEpub()
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/global';
.ebook {
  position: relative;
    .read-wrapper{
    .mask{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
      display: flex;
      .left {
        flex: 0 0 px2rem(100);
      }
      .center {
        flex: 1;
      }
      .right {
        flex: 0 0 px2rem(100);
      }
    }
  }
}
</style>
