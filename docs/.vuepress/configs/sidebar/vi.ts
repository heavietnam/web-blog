import type { SidebarConfig } from "vuepress-theme-gungnir";

export const vi: SidebarConfig = {
  "/guide/": [
    {
      text: "Giới Thiệu Hackintosh",
      link: "/guide/"
    },
    {
      text: "Kiến thức cần có",
      children: [
        "/guide/basic/2021-09-29-tim-hieu-hackintosh.md",
        "/guide/basic/2021-09-30-tim-hieu-phan-cung.md",
        "/guide/basic/2021-10-01-convert-bootloader.md",
        "/guide/basic/2021-10-02-ssdt-recommend.md",
        "/guide/basic/2021-10-03-boot-argument.md"
      ]
    },
    {
      text: "Cài đặt Hackintosh",
      children: [
        "/guide/install/2021-11-23-create_efi_opencore.md",
        "/guide/install/2021-11-24-create_efi_offline.md",
        "/guide/install/2021-11-25-create_efi_online.md",
        "/guide/install/2021-11-26-opencore_dedug.md",
        "/guide/install/2021-11-27-opencore_legacy.md",
      ]
    },
    {
      text: "Vấn đề gặp phải",
      children: [
        "/guide/issue/2021-11-01-fix-kaslr.md",
        "/guide/issue/2021-11-02-fix-stuck-log.md",
        "/guide/issue/2021-11-03-boot-issues.md",
        "/guide/issue/2021-11-04-kernel-issues.md",
        "/guide/issue/2021-11-05-emulated-nvram.md",
        "/guide/issue/2021-11-06-fix-rtc.md",
        "/guide/issue/2021-11-07-popertree-error.md",
        "/guide/issue/2021-11-08-bigsur-error.md",
        "/guide/issue/2021-11-09-monterey-error.md"
      ]
    },
  ],

  "/fix/": [
    {
      text: "Giới thiệu",
      link: '/fix/'
    },
    {
      text: "Patch Phần cứng",
      children: [
        '/fix/2022-01-01-fix_sound.md',
        '/fix/2022-01-02-fix_sleep.md',
        '/fix/2022-01-03-fix_internet_bluetooth.md',
      ]
    },
  ]
};
