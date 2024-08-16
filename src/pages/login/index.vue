<route lang="json5" type="page">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '登录',
  },
}
</route>

<template>
  <wd-navbar fixed placeholder title="登录" safeAreaInsetTop></wd-navbar>
  <view style="height: 100vh; background: #fff">
    <view class="img-a">
      <view class="t-b">
        您好，
        <br />
        欢迎使用，Rooike小程序
      </view>
    </view>
    <view class="login-view" style="">
      <view class="t-login">
        <form class="cl">
          <view class="t-a">
            <text class="txt">手机号</text>
            <input
              type="number"
              name="phone"
              placeholder="请输入您的手机号"
              maxlength="11"
              v-model="phone"
            />
          </view>
          <view class="t-a">
            <text class="txt">密码</text>
            <input
              type="password"
              name="code"
              maxlength="18"
              placeholder="请输入您的密码"
              v-model="pwd"
            />
          </view>
          <button @tap="login()">登 录</button>
          <view class="reg" @tap="reg()">注 册</view>
        </form>
        <view class="t-f"><text>—————— 第三方账号登录 ——————</text></view>
        <view class="t-e cl">
          <view class="t-g" @tap="wxLogin()">
            <image src="https://zhoukaiwen.com/img/loginImg/wx.png"></image>
          </view>
          <view class="t-g" @tap="qqLogin()">
            <image src="https://zhoukaiwen.com/img/loginImg/qq.png"></image>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { currRoute } from '@/utils'
import { useUserStore } from '@/store'
const userStore = useUserStore()
const phone = ref('')
const pwd = ref('')
const login = () => {
  if (!phone.value) {
    uni.showToast({ title: '请输入您的手机号', icon: 'none' })
    return
  }
  if (!/^[1][3,4,5,7,8,9][0-9]{9}$/.test(phone.value)) {
    uni.showToast({ title: '请输入正确手机号', icon: 'none' })
    return
  }
  if (!pwd.value) {
    uni.showToast({ title: '请输入您的密码', icon: 'none' })
    return
  }
  uni.showToast({ title: '登录成功！', icon: 'none' })
  userStore.setUserInfo({ nickname: 'Rookie', avatar: '', token: 'abcdef' })
  const { query } = currRoute()
  console.log(query, '=========================1111')
  uni.reLaunch({ url: query.redirect })
}
// 注册按钮点击
const reg = () => {
  uni.showToast({ title: '注册跳转', icon: 'none' })
}
// 等三方微信登录
const wxLogin = () => {
  uni.showToast({ title: '微信登录', icon: 'none' })
}
// 第三方QQ登录
const qqLogin = () => {
  uni.showToast({ title: 'QQ登录', icon: 'none' })
}
onLoad((opt) => {
  console.log('login onLoad', opt)
})
function handleBack() {
  uni.navigateBack({})
}
function handleBackHome() {
  uni.reLaunch({ url: '/pages/index/index' })
}
</script>
<style lang="scss" scoped>
.txt {
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
}

.img-a {
  width: 100%;
  height: 450rpx;
  background-image: url('https://zhoukaiwen.com/img/loginImg/head.png');
  background-size: 100%;
}

.reg {
  height: 90rpx;
  margin-top: 30rpx;
  font-size: 28rpx;
  font-weight: bold;
  line-height: 90rpx;
  color: #000;
  text-align: center;
  background: #f5f6fa;
  border-radius: 50rpx;
}

.login-view {
  position: relative;
  width: 100%;
  margin-top: -120rpx;
  background-color: #fff;
  border-radius: 6% 6% 0% 0;
}

.t-login {
  width: 600rpx;
  padding-top: 80rpx;
  margin: 0 auto;
  font-size: 28rpx;
}

.t-login button {
  height: 90rpx;
  font-size: 28rpx;
  font-weight: bold;
  line-height: 90rpx;
  color: #fff;
  background: #2796f2;
  border-radius: 50rpx;
}

.t-login input {
  height: 90rpx;
  margin-bottom: 50rpx;
  font-size: 28rpx;
  line-height: 90rpx;
  border-bottom: 1px solid #e9e9e9;
}

.t-login .t-a {
  position: relative;
}

.t-b {
  padding: 130rpx 0 0 70rpx;
  font-size: 42rpx;
  font-weight: bold;
  line-height: 70rpx;
  color: #fff;
  text-align: left;
}

.t-login .t-c {
  position: absolute;
  top: 22rpx;
  right: 22rpx;
  height: 50rpx;
  padding: 0 25rpx;
  font-size: 24rpx;
  line-height: 50rpx;
  color: #fff;
  background: #5677fc;
  border-radius: 50rpx;
}

.t-login .t-d {
  margin: 80rpx 0;
  color: #999;
  text-align: center;
}

.t-login .t-e {
  width: 250rpx;
  margin: 80rpx auto 0;
  text-align: center;
}

.t-login .t-g {
  float: left;
  width: 50%;
}

.t-login .t-e image {
  width: 50rpx;
  height: 50rpx;
}

.t-login .t-f {
  margin: 150rpx 0 0;
  color: #666;
  text-align: center;
}

.t-login .t-f text {
  margin-left: 20rpx;
  font-size: 27rpx;
  color: #aaa;
}

.t-login .uni-input-placeholder {
  color: #aeaeae;
}

.cl {
  zoom: 1;
}

.cl::after {
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
  content: '\20';
}
</style>
