import { createPluginApiHooks, defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: 'en-CN',  // 站点的语言。
  title: 'Welcome',  // 站点的标题后缀
  description: '关于四川交通职业技术学院的校园生活指南', // 站点描述
  head: [['link', { rel: 'icon', href: './img/logo.png' }]], // 额外标签
  locales:{}, // 多语言支持的各个语言 locales 。

  // 主题和它的配置
  themeConfig: {
    logo: './img/logo.png',
  },

  //打包工具配置
  

  //目录配置

  debug: false,
  host:'0.0.0.0',
  port:8080,
  open:false, //打开浏览器

  pagePatterns:['**/*.md', '!.vuepress', '!node_modules'],

  shouldPreload:true, // 预加载资源
  shouldPrefetch:false, // 预加载其他页面资源


  markdown:{}
})