<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="home">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '首页',
  },
}
</route>
<template>
  <wd-navbar fixed placeholder title="首页" safeAreaInsetTop></wd-navbar>
  <view class="bg-gray-100">
    <wd-search
      v-model="value"
      @focus="focus"
      @blur="blur"
      @search="search"
      @clear="clear"
      @cancel="cancel"
      @change="change"
      placeholder="请输入关键词"
      maxlength="10"
      hide-cancel
      placeholder-left
    />
    <view class="my-2 px-4">
      <wd-swiper
        :list="swiperList"
        autoplay
        v-model:current="current"
        :indicator="{ type: 'dots-bar' }"
        @click="handleClick"
        @change="onChange"
      ></wd-swiper>
    </view>
    <wd-card>
      <wd-grid :column="4">
        <wd-grid-item icon="picture" text="文字" />
        <wd-grid-item icon="picture" text="文字" />
        <wd-grid-item icon="picture" text="文字" />
        <wd-grid-item icon="picture" text="文字" />
        <wd-grid-item icon="picture" text="文字" />
        <wd-grid-item icon="picture" text="文字" />
        <wd-grid-item icon="picture" text="文字" />
        <wd-grid-item icon="picture" text="文字" />
      </wd-grid>
    </wd-card>
    <view class="my-2 px-4 flex items-center justify-between">
      <view class="text-sm text-gray-500">兴趣推荐</view>
      <view class="text-sm text-gray-500 flex items-center">
        <text>查看更多</text>
        <i>
          <wd-icon name="arrow-right" size="14" />
        </i>
      </view>
    </view>
    <wd-card>
      <wd-status-tip image="content" tip="暂无内容" />
    </wd-card>
  </view>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store'
import { onShareAppMessage } from '@dcloudio/uni-app'
import { getLastItem } from '@/utils'

const userStore = useUserStore()

const isLogined = computed(() => {
  console.log('userStore=>', userStore)
  const pages = getCurrentPages()
  console.log('pages:', pages)
  return userStore.isLogined
})

onLoad(() => {})

const loginRoute = '/pages/login/index'

onReady(() => {
  const pages = getCurrentPages()
  const lastPage = getLastItem(pages)
  const currRoute = (lastPage as any).$page
  if (!isLogined.value) {
    // redirect时都需要 encodeURIComponent 一下，否则获取到的参数不对
    const redirectRoute = `${loginRoute}?redirect=${encodeURIComponent(currRoute.fullPath)}`
    uni.redirectTo({ url: redirectRoute })
  }
})
const value = ref<string>('')
function focus() {
  console.log('聚焦')
}
function blur() {
  console.log('失焦')
}
function search() {
  console.log('搜索')
}
function clear() {
  console.log('重置')
}
function cancel() {
  console.log('取消')
}
function change({ value }) {
  console.log('输入', value)
}
const current = ref<number>(0)

const swiperList = ref([
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/redpanda.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/capybara.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/panda.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/moon.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/meng.jpg',
])
function handleClick(e) {
  console.log(e)
}
function onChange(e) {
  console.log(e)
}
/** 激活“分享给好友” */
onShareAppMessage((options: Page.ShareAppMessageOption): Page.CustomShareContent => {
  console.log('options:', options)
  return {
    title: 'Rookie uniapp',
    desc: 'Rookie uniapp 演示示例',
    path: '/pages/index/index?id=xxx',
  }
})
</script>

<style>
.main-title-color {
  color: #d14328;
}

.test-unocss-apply {
  @apply m-4;
}
</style>
