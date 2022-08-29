import type { NavbarConfig } from "vuepress-theme-gungnir";
import { version } from "../meta";

export const vi: NavbarConfig = [
  {
    text: "Giới Thiệu",
    link: "/",
    icon: "io-home"
  },
  {
    text: "Tài Nguyên",
    link: '/resources/',
    icon: "bi-inboxes-fill",
    children: [
      { text: 'EFI', link: 'https://facebook.com/zenfection' },
      { text: 'Image', link: 'https://facebook.com/zenfection'},
      { text: 'Tool', link: 'https://facebook.com/zenfection'},
      { text: 'heavietnam theme', link: 'https://facebook.com/zenfection'},
    ],
  },
  {
    text: "Tag",
    link: "/tags/",
    icon: "fa-tag"
  },
  {
    text: "Cài Đặt",
    link: "/guide/",
    icon: "md-installdesktop-outlined"
  },
  {
    text: "Diễn đàn",
    link: "https://forum.heavietnam.ga",
    icon: "md-forum-outlined"
  },

];
