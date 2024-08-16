/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by vite-plugin-uni-pages

interface NavigateToOptions {
  url: "/pages/index/index" |
       "/pages/demo/index" |
       "/pages/index/request" |
       "/pages/login/index" |
       "/pages/my/index" |
       "/pages-sub/demo/base/auto-import" |
       "/pages-sub/demo/base/css" |
       "/pages-sub/demo/base/enum" |
       "/pages-sub/demo/base/env" |
       "/pages-sub/demo/base/iconfont" |
       "/pages-sub/demo/base/mock" |
       "/pages-sub/demo/base/mp-weixin-share" |
       "/pages-sub/demo/base/navbar" |
       "/pages-sub/demo/base/no-navbar" |
       "/pages-sub/demo/base/pinia" |
       "/pages-sub/demo/base/request" |
       "/pages-sub/demo/base/request2" |
       "/pages-sub/demo/base/route-interceptor" |
       "/pages-sub/demo/base/svg" |
       "/pages-sub/demo/base/throughout" |
       "/pages-sub/demo/base/uni-ui-icons" |
       "/pages-sub/demo/base/uni-ui" |
       "/pages-sub/demo/base/unocss-icons" |
       "/pages-sub/demo/base/unocss" |
       "/pages-sub/demo/base/upload" |
       "/pages-sub/demo/base/upload2" |
       "/pages-sub/demo/base/uv-ui" |
       "/pages-sub/demo/base/vconsole" |
       "/pages-sub/demo/base/wot" |
       "/pages-sub/demo/page/clock" |
       "/pages-sub/demo/page/clock2" |
       "/pages-sub/demo/page/floating-bubble" |
       "/pages-sub/demo/page/i18n" |
       "/pages-sub/demo/page/sign" |
       "/pages-sub/demo/page/waterfall" |
       "/pages-sub/demo/route-interceptor/index" |
       "/pages-sub/demo/route-interceptor/login-auto" |
       "/pages-sub/demo/route-interceptor/login-model" |
       "/pages-sub/demo/route-interceptor/login-page" |
       "/pages-sub/demo/page/img-min/index" |
       "/pages-sub/demo/page/lottery/big-wheel" |
       "/pages-sub/demo/page/lottery/nine-grid" |
       "/pages-sub/demo/page/sp-editor/index" |
       "/pages-sub/demo/page/z-paging/index";
}
interface RedirectToOptions extends NavigateToOptions {}

interface SwitchTabOptions {
  url: "/pages/index/index" | "/pages/demo/index" | "/pages/my/index"
}

type ReLaunchOptions = NavigateToOptions | SwitchTabOptions;

declare interface Uni {
  navigateTo(options: UniNamespace.NavigateToOptions & NavigateToOptions): void;
  redirectTo(options: UniNamespace.RedirectToOptions & RedirectToOptions): void;
  switchTab(options: UniNamespace.SwitchTabOptions & SwitchTabOptions): void;
  reLaunch(options: UniNamespace.ReLaunchOptions & ReLaunchOptions): void;
}
