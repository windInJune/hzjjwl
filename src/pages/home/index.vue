<template>
  <div class="container">
      <div class="topBox">
        <div class="inputBox">
          <input class="starSearch" placeholder="输入您想找的明星" type="text" disabled>
          <img class="icon" :src="searchSrc" alt="">
        </div>
        <swiper class="swiperBox" :indicator-dots="indicatorDots"
          :autoplay="autoplay" :interval="interval" :duration="duration">
          <block v-for="(item,index) in imgUrls" :key="index">
            <swiper-item>
              <image :src="item" class="slide-image" width="355" height="150"/>
            </swiper-item>
          </block>
        </swiper>
      </div>      
      <div class="myloveTitle">我的爱豆</div>
      <div class="myloveBox">
          <div class="myloveList">
            <img src="http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg" alt="" class="starIcon">
            <div class="starName">王源</div>
            <div class="getXb">
              <img class="xbIcon" :src="xbSrc" alt="">
              <span>1314</span>
            </div>
            <div class="pickBtn">pick</div>
          </div>
          <div class="myloveList"></div>
          <div class="myloveList"></div>
          <div class="myloveList"></div>
      </div>
      <div class="navBox">
        <div class="navCheck">
          <div class="nav week active">周榜</div>
          <div class="nav month ">月榜</div>
        </div>
        <div class="navRight">
          <img :src="downIcon" alt="" class="downIcon">
          <span>第5周 2018/09/24-2018/09/30</span>
        </div>
      </div>
      <div class="listBox">
         <div class="list">
           <div class="rank">1</div>
           <div class="headBox">
               <img  class="starImg" src="http://image-1257827636.cos.ap-shanghai.myqcloud.com/no20181022152854.gif" alt="">
               <img :src="xbSrc" alt="" >
               <img :src="firstIcon" alt="" class="firstIcon">
           </div>
           <div class="starName">赵丽颖</div>
           <div class="getXb">
             <img class="xbIcon" :src="xbSrc" alt="">             
             <span>2312</span>
           </div>
            <div class="bestFans">
              <div class="test">最佳星粉：</div>
              <img :src="xbSrc" alt="" class="bestFansIcon">
           </div>
           <div class="guardian">
              <div class="test">守护者人数：123345人</div>
           </div>
           <img :src="pickIcon" alt="" class="pickBtn">
         </div>
         <div class="list">
           <div class="rank">2</div>
           <div class="headBox">
               <img  class="starImg" src="http://image-1257827636.cos.ap-shanghai.myqcloud.com/no20181022152854.gif" alt="">
               <img :src="xbSrc" alt="" class="starIcons">
               <img :src="twoIcon" alt="" class="firstIcon">
           </div>
           <div class="starName">赵丽颖</div>
           <div class="getXb">
             <img class="xbIcon" :src="xbSrc" alt="">             
             <span>2312</span>
           </div>
           <div class="bestFans">
              <div class="test">最佳星粉：</div>
              <img :src="xbSrc" alt="" class="bestFansIcon">
           </div>
           <div class="guardian">
              <div class="test">守护者人数：123345人</div>
           </div>
           <img :src="pickIcon" alt="" class="pickBtn">
         </div>
         <div class="list">
           <div class="rank">3</div>
           <div class="headBox">
               <img  class="starImg" src="http://image-1257827636.cos.ap-shanghai.myqcloud.com/no20181022152854.gif" alt="">
               <img :src="xbSrc" alt="" >
               <img :src="threeIcon" alt="" class="firstIcon">
           </div>
           <div class="starName">赵丽颖</div>
           <div class="getXb">
             <img class="xbIcon" :src="xbSrc" alt="">             
             <span>2312</span>
           </div>
           <div class="bestFans">
              <div class="test">最佳星粉：</div>
              <img :src="xbSrc" alt="" class="bestFansIcon">
           </div>
           <div class="guardian">
              <div class="test">守护者人数：123345人</div>
           </div>
           <img :src="pickIcon" alt="" class="pickBtn">
         </div>
      </div>
      <div class="otherListBox">
         <div class="list">
            <div class="rank">4</div>
            <div class="headBox">
               <img :src="xbSrc" alt="" >
            </div>
            <div class="starName">赵丽颖</div>
            <div class="getXb">
              <img class="xbIcon" :src="xbSrc" alt="">             
              <span>2312</span>
            </div>
            <div class="pickBtn">pick</div>
         </div>
         <div class="list">
            <div class="rank">5</div>
            <div class="headBox">
               <img :src="xbSrc" alt="" >
            </div>
            <div class="starName">赵丽颖</div>
            <div class="getXb">
              <img class="xbIcon" :src="xbSrc" alt="">             
              <span>2312</span>
            </div>
            <div class="pickBtn">pick</div>
         </div>
         <div class="list">
            <div class="rank">6</div>
            <div class="headBox">
               <img :src="xbSrc" alt="" >
            </div>
            <div class="starName">赵丽颖</div>
            <div class="getXb">
              <img class="xbIcon" :src="xbSrc" alt="">             
              <span>2312</span>
            </div>
            <div class="pickBtn">pick</div>
         </div>
         <div class="list">
            <div class="rank">7</div>
            <div class="headBox">
               <img :src="xbSrc" alt="" >
            </div>
            <div class="starName">赵丽颖</div>
            <div class="getXb">
              <img class="xbIcon" :src="xbSrc" alt="">             
              <span>2312</span>
            </div>
            <div class="pickBtn">pick</div>
         </div>
  
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchSrc: require("../../../static/images/search.png"),
      xbSrc: require("../../../static/images/xb.png"),
      downIcon: require("../../../static/images/down.png"),
      firstIcon: require("../../../static/images/no1.png"),
      twoIcon: require("../../../static/images/no2.png"),
      threeIcon: require("../../../static/images/no3.png"),
      pickIcon: require("../../../static/images/pick.png"),
      imgUrls: [
        "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
        "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
      ],
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000
    };
  },
  methods: {},
  created() {}
};
</script>
<style  lang="scss">
@import "../../assets/styles/mixins.scss";
.container {
  overflow-x: hidden;
  .topBox {
    background: url("https://image-1257827636.cos.ap-shanghai.myqcloud.com/bannerbg20181022134434.png") no-repeat;
    background-size: 100% auto;
    padding: 0 30rpx;
    box-sizing: border-box;
    min-height: 352rpx;
    width: 100%;
    .inputBox {
      position: relative;
      width: 100%;
      height: 70rpx;
      .starSearch {
        width: 100%;
        height: 70rpx;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 5rpx 12rpx 1rpx rgba(157, 141, 253, 0.28);
        border-radius: 35rpx;
        font-size: 30rpx;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(158, 157, 163, 1);
        text-align: left;
        padding: 0 64rpx;
        box-sizing: border-box;
      }
      .icon {
        width: 34rpx;
        height: 34rpx;
        position: absolute;
        top: 18rpx;
        left: 16rpx;
      }
    }
    .swiperBox {
      height: 360rpx;
      width: 100%;
      margin-top: 30rpx;
      position: relative;
      .slide-image {
        border-radius: 10rpx;
      }
    }
  }
  .myloveTitle {
    padding: 0 30rpx;
    font-size: 30rpx;
    font-family: PingFang-SC-Bold;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    margin: 30rpx 0;
    width: 100%;
    text-align: left;
    box-sizing: border-box;
  }
  .myloveBox {
    height: 100rpx;
    padding-left: 30rpx;
    box-sizing: border-box;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    .myloveList {
      width: 385rpx;
      height: 100%;
      background: #fff;
      border-radius: 10rpx;
      position: relative;
      display: inline-block;
      margin-right: 30rpx;
      font-size: 25rpx;
      .starIcon {
        width: 80rpx;
        height: 80rpx;
        position: absolute;
        left: 20rpx;
        top: 10rpx;
      }
      .starIcons{
        border-radius: 50%;
      }
      .starName {
        position: absolute;
        top: 18rpx;
        height: 30rpx;
        line-height: 30rpx;
        font-size: 28rpx;
        padding-left: 110rpx;
      }
      .getXb {
        position: absolute;
        bottom: 18rpx;
        height: 30rpx;
        display: flex;
        align-items: center;
        font-size: 28rpx;
        padding-left: 110rpx;
        .xbIcon {
          width: 30rpx;
          height: 30rpx;
          margin-right: 10rpx;
        }
      }
      .pickBtn {
        width: 88rpx;
        height: 40rpx;
        line-height: 40rpx;
        color: #fff;
        text-align: center;
        background: linear-gradient(
          0deg,
          rgba(97, 6, 234, 1) 0%,
          rgba(236, 109, 255, 1) 100%
        );
        border-radius: 10rpx;
        position: absolute;
        right: 20rpx;
        top: 30rpx;
      }
    }
  }
  .navBox {
    padding: 0 30rpx;
    margin-top: 60rpx;
    height: 46rpx;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .navCheck {
      width: 324rpx;
      display: flex;
      align-items: center;
      .nav {
        height: 46rpx;
        width: 160rpx;
        font-size: 30rpx;
        text-align: center;
        color: #fff;
        line-height: 46rpx;
        position: relative;
        background: url("http://image-1257827636.cos.ap-shanghai.myqcloud.com/120181022141755.png")
          no-repeat;
        background-size: 100% 100%;
      }
      .month {
        &.active::before {
          content: "月榜";
          position: absolute;
          top: 0;
          left: 8rpx;
          width: 144rpx;
          height: 60rpx;
          line-height: 46rpx;
          text-align: center;
          color: #fff;
          font-size: 30rpx;
          z-index: 999;
          background: linear-gradient(
            0deg,
            rgba(97, 6, 234, 1) 0%,
            rgba(236, 109, 255, 1) 100%
          );
          box-shadow: 0px 2px 8px 0px rgba(157, 140, 255, 0.68);
          border-bottom-left-radius: 30rpx;
          border-bottom-right-radius: 30rpx;
        }
      }
      .week {
        &.active::before {
          content: "周榜";
          position: absolute;
          top: 0;
          left: 8rpx;
          width: 144rpx;
          height: 60rpx;
          line-height: 46rpx;
          text-align: center;
          color: #fff;
          font-size: 30rpx;
          background: linear-gradient(
            0deg,
            rgba(97, 6, 234, 1) 0%,
            rgba(236, 109, 255, 1) 100%
          );
          box-shadow: 0px 2px 8px 0px rgba(157, 140, 255, 0.68);
          border-bottom-left-radius: 30rpx;
          border-bottom-right-radius: 30rpx;
          z-index: 999;
        }
      }
    }
    .navRight {
      color: #fff;
      font-size: 26rpx;
      border-radius: 14rpx;
      display: flex;
      flex: 1;
      align-items: center;
      flex-direction: row-reverse;
      .downIcon {
        width: 19rpx;
        height: 11rpx;
        margin-left: 5rpx;
      }
    }
  }
  .listBox {
    width: 100%;
    box-sizing: border-box;
    padding: 0 30rpx;
    .list {
      width: 100%;
      height: 180rpx;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 5px 5px 0px rgba(106, 86, 225, 0.42);
      margin-bottom: 10rpx;
      position: relative;
      .rank {
        position: absolute;
        bottom: -40rpx;
        left: -20rpx;
        font-size: 200rpx;
        font-family: Jade2B;
        font-weight: 400;
        color: rgba(157, 140, 255, 1);
        opacity: 0.3;
        transform: rotate(10deg);
        -webkit-transform: rotate(10deg);
        z-index: 9;
      }
      .headBox {
        height: 100rpx;
        width: 100rpx;
        position: absolute;
        z-index: 99;
        left: 60rpx;
        top: 40rpx;
        .starImg {
          position: absolute;
          top: -18rpx;
          left: -18rpx;
          height: 134rpx;
          width: 138rpx;
          border-radius: 50%;
        }
        .firstIcon {
          width: 55rpx;
          height: 54rpx;
          position: absolute;
          left: -20rpx;
          top: -20rpx;
        }
      }
      .starName {
        height: 40rpx;
        line-height: 40rpx;
        text-align: left;
        font-size: 28rpx;
        font-family: PingFang-SC-Bold;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        position: absolute;
        left: 190rpx;
        top: 50rpx;
        @include overhide();
      }
      .getXb {
        position: absolute;
        left: 190rpx;
        top: 100rpx;
        height: 30rpx;
        display: flex;
        align-items: center;
        font-size: 28rpx;
        .xbIcon {
          width: 30rpx;
          height: 30rpx;
          margin-right: 10rpx;
        }
      }
      .bestFans,
      .guardian {
        width: 256rpx;
        height: 28rpx;
        background: rgba(255, 185, 212, 1);
        border-radius: 14rpx;
        position: absolute;
        left: 320rpx;
      }
      .bestFans {
        top: 48rpx;
        .test {
          position: absolute;
          top: -10rpx;
          left: 20rpx;
          height: 24rpx;
          font-size: 22rpx;
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
        }
        .bestFansIcon {
          position: absolute;
          top: -40rpx;
          right: 30rpx;
          height: 82rpx;
          width: 82rpx;
        }
      }
      .guardian {
        bottom: 36rpx;
        .test {
          position: absolute;
          top: -10rpx;
          left: 20rpx;
          height: 24rpx;
          font-size: 22rpx;
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
        }
      }
      .pickBtn {
        position: absolute;
        top: 50rpx;
        right: 20rpx;
        height: 80rpx;
        width: 80rpx;
      }
    }
  }
  .otherListBox{
    width: 100%;
    box-sizing: border-box;
    padding: 0 30rpx;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 30rpx;
    .list{
      width: 49%;
      height:180rpx;
      background:rgba(255,255,255,1);
      box-shadow:0px 5px 5px 0px rgba(106,86,225,0.42);
      margin-top: 10rpx;
      position: relative;
      .rank {
        position: absolute;
        bottom: -40rpx;
        left: -20rpx;
        font-size: 200rpx;
        font-family: Jade2B;
        font-weight: 400;
        color: rgba(157, 140, 255, 1);
        opacity: 0.3;
        transform: rotate(10deg);
        -webkit-transform: rotate(10deg);
        z-index: 9;
      }
      .headBox {
        height: 100rpx;
        width: 100rpx;
        position: absolute;
        z-index: 99;
        left: 20rpx;
        top: 40rpx;
      }
      .starName {
        height: 40rpx;
        line-height: 40rpx;
        text-align: left;
        font-size: 28rpx;
        font-family: PingFang-SC-Bold;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        position: absolute;
        left: 140rpx;
        top: 50rpx;
        @include overhide();
      }
      .getXb {
        position: absolute;
        left: 140rpx;
        top: 100rpx;
        height: 30rpx;
        display: flex;
        align-items: center;
        font-size: 28rpx;
        .xbIcon {
          width: 30rpx;
          height: 30rpx;
          margin-right: 10rpx;
        }
      }
      .pickBtn {
        width: 88rpx;
        height: 40rpx;
        line-height: 40rpx;
        color: #fff;
        text-align: center;
        background: linear-gradient(
          0deg,
          rgba(97, 6, 234, 1) 0%,
          rgba(236, 109, 255, 1) 100%
        );
        border-radius: 10rpx;
        position: absolute;
        right: 10rpx;
        bottom: 10rpx;
      }
    }
  }
}
</style>
