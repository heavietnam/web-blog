import type { SidebarConfig } from "vuepress-theme-gungnir";

export const vi: SidebarConfig = {
  '/guide/':[
    {
      text: "Giới Thiệu",
      link: "/guide/",
    },
    {
      text: "Kiến thức cần có",
      collapsible: true,
      children: [
        "/guide/basic/2021-09-29-tim-hieu-hackintosh.md",
        "/guide/basic/2021-09-30-tim-hieu-phan-cung.md",
      ]
    },

    // {
    //   text: "Cài đặt Hackintosh",
    //   collapsible: true,
    //   children: [
    //     "/guide/install/tao_efi_opencore.md",
    //   ]
    // }
  ]
};
