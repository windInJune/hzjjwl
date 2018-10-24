<script>
export default {
  created() {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("logs", logs);
  }
};
</script>

<style lang="scss">
@import "./assets/styles/reset.scss";
.container {
  min-height: 100%;
  box-sizing: border-box;
  background: url("https://image-1257827636.cos.ap-shanghai.myqcloud.com/listbg20181022094912.png")
    repeat;
}
image {
  height: 100%;
  width: 100%;
}
@font-face {
  font-family: "Jade2B";
  src: url("https://xcx-img.vdailian.com/studio_course/20180730151202.ttf");
}
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
