import { defineClientConfig } from "@vuepress/client";
import { addIcons } from "oh-vue-icons";

import {
  IoHome,
  CoAmd,
  CoIntel,
  CoNvidia,
  BiInboxesFill,
  MdForumOutlined,
  MdInstalldesktopOutlined,
  SiGoogleoptimize,
  GiAutoRepair,
  CoGit,
  FaTag,
  OiGitCompare,
  OiRocket,
  RiBilibiliLine,
  RiBook2Fill,
  RiGithubLine,
  RiSailboatLine,
  RiVuejsLine
} from "oh-vue-icons/icons";

addIcons(
  IoHome,
  CoAmd,
  CoIntel,
  CoNvidia,
  BiInboxesFill,
  MdForumOutlined,
  MdInstalldesktopOutlined,
  SiGoogleoptimize,
  GiAutoRepair,
  RiBilibiliLine,
  FaTag,
  RiBook2Fill,
  RiVuejsLine,
  CoGit,
  RiGithubLine,
  OiGitCompare,
  OiRocket,
  RiSailboatLine
);

export default defineClientConfig({});
