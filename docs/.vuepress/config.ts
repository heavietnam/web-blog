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
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/img/logo/favicon-16x16.png`
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/img/logo/favicon-32x32.png`
      }
    ],
    ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
    ["meta", { name: "application-name", content: "Gungnir Theme" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "Gungnir Theme" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/img/logo/apple-touch-icon.png` }
    ],
    ["meta", { name: "theme-color", content: "#377bb5" }],
    ["meta", { name: "msapplication-TileColor", content: "#377bb5" }]
  ],

  // Cấu hình ngôn ngữ trong web
  locales: {
    "/": {
      lang: "vi",
      title: "Hackintosh Guide",
      description: "Hướng dẫn cài đặt Hackintosh từ A tới Z"
    }
  },
  extendsMarkdown: (md) => {
    md.linkify.set({ fuzzyEmail: false })
  },
  // chỉ định gói môi trường
  bundler:
    process.env.DOCS_BUNDLER === "webpack" ? webpackBundler() : viteBundler(),

  // cấu hình theme mặc định trên web
  theme: gungnirTheme({
    repo: "heavietnam/blog",
    docsDir: "docs",
    navbarTitle: "Trang Chủ",
    editLink: false,
    //editLinkText: "Chỉnh Sửa Tại Đây",

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
        email: "heavietnam@gmail.com"
      }
    },

    // ảnh background slider trên homepage
    homeHeaderImages: [
      // {
      //   path: "/img/home-bg/1.png",
      //   mask: "rgba(40, 57, 101, .4)"
      // },
      {
        path: "/img/home-bg/2.png",
        mask: "rgb(251, 170, 152, .2)"
      },
      // {
      //   path: "/img/home-bg/3.png",
      //   mask: "rgba(68, 74, 83, .1)"
      // }
    ],
    // other pages
    pages: {
      tags: {
        title: "Tổng hợp bài viết",
        subtitle: "Tra bài viết bằng tags",
        bgImage: {
          path: "/img/pages/tags.jpg",
          mask: "rgba(211, 136, 37, .5)"
        }
      },
      links: {
        title: "Heavietnam",
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
        sidebar: sidebar.vi,
        // "show all tags" button
        showAllTagsText: "Xem Tất Cả",
        // post pager
        postNext: "Tiếp Theo",
        postPrev: "Bài Trước",

        // home page pager
        homeNext: "Newer Posts",
        homePrev: "Older Posts",

        // PWA-popup
        pwaPopupMessage: "Có Bản Cập Nhật Mới.",
        pwaPopupButtonText: "Làm Mới",

        // header image
        headerImageCredit: "Hình Ảnh Của"
      }
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      katex: false,
      mermaid: false,
      chartjs: false,
      giscus: {
        repo: "heavietnam/giscus-comment",
        repoId: "R_kgDOH5vJBA",
        category: "Announcements",
        categoryId: "DIC_kwDOH5vJBM4CRHbX",
        lang: "vi",
        lazyLoad: true
      },
      mdPlus: {
        all: true
      },
      //ga: "G-EE8M2S3MPB", google analytics
      pwa: false,
      search: false, // use @vuepress/plugin-docsearch instead
    },

    footer: `
      &copy; <a href="https://github.com/heavietnam" target="_blank">Heavietnam</a> 2021-2022
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/zenfection1412" target="_blank">Zenfection</a>
    `
  }),

  markdown: {
    headers: {
      level: [2, 3, 4, 5]
    }
  },


  plugins: [
    docsearchPlugin({
      appId: "TVFUFUXABX",
      apiKey: "1e4c24900b3580ae0d21d7dc98735caa",
      indexName: "hackintosh",
      locales: {
        "/": {
          placeholder: 'Gõ từ khoá để tìm kiếm',
          translations: {
            button: {
              buttonText: 'Tìm Kiếm',
            },
          },

        }
      }
    })
  ]
});
