<template>
  <div class="container">
    <div class="topBox">
        <div class="designation">
            <img :src="searchSrc" alt="">
            <div class="name">NO.1 天下无双</div> 
        </div>
        <div class="starBanner">
            <img src="http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg" alt="">
            <div class="bottomDiv">
                <div class="starBox">
                    <div class="headBox">
                        <img  class="starImg" src="http://image-1257827636.cos.ap-shanghai.myqcloud.com/no20181022152854.gif" alt="">
                        <img class="starIcons" src="http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg" alt="" >
                        <img :src="firstIcon" alt="" class="firstIcon">
                    </div>
                    <div class="starName">赵丽颖</div>
                    <div class="getXb">
                        <img class="xbIcon" :src="xbSrc" alt="">             
                        <span>2312</span>
                    </div>
                    <div class="noNum">NO.1</div>
                </div>
                <div class="fansBox">
                    <div class="bestFans">
                        <span>最佳星粉:</span>
                    </div>
                    <img class="fansImg" src="http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg" alt=""  >                    
                    <div class="intimacy">
                        <block v-for="(item,index) in [0,1,2,3,4]" :key="index">
                          <img class="loveicon" :src="loveIcon" alt="">
                        </block>
                        <span>亲密度：</span>                        
                    </div>
                </div>
            </div>
        </div>
        <div class="switchBox">
            <div class="switch">
              <span>打榜提醒</span>
              <switch checked/>
            </div>
            <div class="rule">
              <span>打榜规则</span>
              <img :src="ruleIcon" alt="">
            </div>
        </div>
    </div> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstIcon: require("../../../static/images/no1.png"),
      twoIcon: require("../../../static/images/no2.png"),
      xbSrc: require("../../../static/images/xb.png"),
      threeIcon: require("../../../static/images/no3.png"),
      loveIcon: require("../../../static/images/love.png"),
      ruleIcon: require("../../../static/images/rule.png"),
      searchSrc: require("../../../static/images/top.png")
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
  .wx-switch-input {
    width: 40px !important;
    height: 20px !important;
  }

  .wx-switch-input::before {
    width: 40px !important;
    height: 20px !important;
  }

  .wx-switch-input::after {
    width: 18px !important;
    height: 18px !important;
  }
  .topBox {
    background: url("https://image-1257827636.cos.ap-shanghai.myqcloud.com/bannerbg20181022134434.png")
      no-repeat;
    background-size: 100% auto;
    padding: 0 30rpx;
    box-sizing: border-box;
    width: 100%;
    min-height: 352rpx;
    .designation {
      width: 404rpx;
      height: 82rpx;
      position: relative;
      margin: 0 auto;
      .name {
        width: 404rpx;
        height: 82rpx;
        color: #fff;
        text-align: center;
        line-height: 82rpx;
        position: absolute;
        font-size: 38rpx;
        left: 0;
        top: 0;
      }
    }
    .starBanner {
      margin-top: 10rpx;
      width: 100%;
      height: 360rpx;
      position: relative;
      .bottomDiv {
        height: 120rpx;
        width: 100%;
        background: rgba(147, 89, 248, 1);
        box-shadow: 10px 0px 0px rgba(165, 237, 114, 0.35);
        opacity: 0.8;
        display: flex;
        justify-content: space-between;
        position: absolute;
        left: 0;
        bottom: 0;
        .starBox {
          width: 55%;
          color: #fff;
          position: relative;
          .headBox {
            height: 100rpx;
            width: 100rpx;
            position: absolute;
            z-index: 99;
            left: 30rpx;
            top: -30rpx;
            .starImg {
              position: absolute;
              top: -18rpx;
              left: -18rpx;
              height: 134rpx;
              width: 138rpx;
              border-radius: 50%;
            }
            .starIcons {
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
            position: absolute;
            left: 150rpx;
            top: 20rpx;
            @include overhide();
          }
          .getXb {
            position: absolute;
            left: 150rpx;
            top: 70rpx;
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
          .noNum {
            position: absolute;
            right: 0rpx;
            bottom: 20rpx;
            background: rgba(241, 158, 194, 1);
            border-radius: 20rpx;
            font-size: 26rpx;
            padding: 5rpx 20rpx;
            font-family: PingFang-SC-Bold;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
          }
        }
        .fansBox {
          width: 45%;
          position: relative;
          .fansImg {
            height: 76rpx;
            width: 76rpx;
            position: absolute;
            right: 10rpx;
            top: -28rpx;
            border-radius: 50%;
          }
          .bestFans {
            font-size: 22rpx;
            font-family: PingFang-SC-Medium;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            text-align: right;
            padding-right: 100rpx;
            margin-top: 15rpx;
          }
          .intimacy {
            display: flex;
            align-items: center;
            text-align: right;
            flex-direction: row-reverse;
            height: 90rpx;
            padding-right: 20rpx;
            font-size: 24rpx;
            color: #fff;
            .loveicon {
              width: 22rpx;
              height: 20rpx;
              margin-right: 4rpx;
            }
          }
        }
      }
    }
  }
  .switchBox{
    margin-top: 30rpx;
    display: flex;
    justify-content: space-between;
    .switch{
      width:50%;
      height:40px;
      display: flex;
      align-items: center;
      font-size:30rpx;
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(255,255,255,1);
      span{
        margin-right: 20rpx;
      }
    }
    .rule{
      width:50%;
      height:40px;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      font-size:30rpx;
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(255,255,255,1);
      img{
        height: 28rpx;
        width: 28rpx;
      }
      span{
        margin-right: 20rpx;
      }
    }
  }
}
</style>
