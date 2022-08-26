import { viteBundler } from "@vuepress/bundler-vite";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { defineUserConfig } from "vuepress";
import { gungnirTheme, i18n } from "vuepress-theme-gungnir";
import { navbar, sidebar } from "./configs";

const isProd = process.env.NODE_ENV === "production";

export default defineUserConfig({
  base: "/",
  head: [
    [ "link", { rel: "icon", type: "image/png", sizes: "16x16", href: `/img/logo/favicon-16x16.png` }],
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: `/img/logo/favicon-32x32.png` }],
    ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
    ["meta", { name: "application-name", content: "Gungnir Theme" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "Gungnir Theme" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
    ["link", { rel: "apple-touch-icon", href: `/img/logo/apple-touch-icon.png` }],
    ["meta", { name: "theme-color", content: "#377bb5" }],
    ["meta", { name: "msapplication-TileColor", content: "#377bb5" }]
  ],

  // Cấu hình ngôn ngữ trong web
  locales: {
    "/": {
      lang: "vi",
      title: "Hackintosh Guide",
      description: "Hướng dẫn cài đặt Hackintosh từ A tới Z"
    },
  },

  // chỉ định gói môi trường
  bundler:
    process.env.DOCS_BUNDLER === "webpack" ? webpackBundler() : viteBundler(),

  // cấu hình theme mặc định trên web
  theme: gungnirTheme({
    repo: "heavietnam/blog",
    docsDir: "docs",
    navbarTitle: "Trang Chủ",

    //hitokoto: true, //* Tính năng thêm của trung quốc

    // Thông tin cá nhân
    personalInfo: {
      name: "Heavietnam",
      avatar: "/img/avatar.png",
      description: "Chào mừng đến với heavietnam",
      sns: {
        github: "heavietnam",
        //linkedin: "heavietnam",
        facebook: "heavietnam",
        //twitter: "heavietnam",
        email: "heavietnam@gmail.com",
      }
    },

    // ảnh background slider trên homepage
    homeHeaderImages: [
      {
        path: "/img/home-bg/1.png",
        mask: "rgba(40, 57, 101, .4)"
      },
      {
        path: "/img/home-bg/2.png",
        mask: "rgb(251, 170, 152, .2)"
      },
      {
        path: "/img/home-bg/3.png",
        mask: "rgba(68, 74, 83, .1)"
      },
    ],
    blogNumPerPage: 20, //* trang chủ có 20 bài viết
    // other pages
    pages: {
      tags: {
        subtitle: "Black Sheep Wall",
        bgImage: {
          path: "/img/pages/tags.jpg",
          mask: "rgba(211, 136, 37, .5)"
        }
      },
      links: {
        title: 'Heavietnam',
        subtitle:
          "Là 1 trang web về hackintosh  được tạo ra vào ngày 29/9/2021.",
        bgImage: {
          path: "/img/pages/links.jpg",
          mask: "rgba(64, 118, 190, 0.5)"
        }
      }
    },

    // theme-level locales config
    locales: {
      "/": {
        // navbar
        navbar: navbar.vi,
        // sidebar
        sidebar: sidebar.vi
      },
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      katex: true,
      mermaid: true,
      chartjs: true,
      giscus: {
        repo: "This-is-an-Apple/gitalk-comments",
        repoId: "MDEwOlJlcG9zaXRvcnkyMTA1MjQyMTQ=",
        category: "Announcements",
        categoryId: "DIC_kwDODIxYNs4CAO1u",
        lazyLoad: true
      },
      mdPlus: {
        all: true
      },
      ga: "G-EE8M2S3MPB",
      ba: "10b7bc420625758a319d6b23aed4700f",
      // rss: {
      //   siteURL: "https://v2.vuepress-theme-gungnir.vercel.app",
      //   copyright: "Renovamen 2018-2022"
      // },
      pwa: true,
      search: true // use @vuepress/plugin-docsearch instead
    },

    footer: `
      &copy; <a href="https://github.com/Renovamen" target="_blank">Renovamen</a> 2018-2022
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `
  }),

  markdown: {
    extractHeaders: {
      level: [2, 3, 4, 5]
    }
  },

  plugins: [
    // docsearchPlugin({
    //   appId: "3DDLGP0IG4",
    //   apiKey: "6556adaa82b31485309b440a525f264a",
    //   indexName: "v2-vuepress-theme-gungnir",
    //   locales: {
    //     "/": {
    //       placeholder: "Tìm kiếm"
    //     }
    //   }
    // })
  ]
});
