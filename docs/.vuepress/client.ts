import { defineClientConfig } from "@vuepress/client";
import { addIcons } from "oh-vue-icons";
import {
  IoHome,
  BiInboxesFill,
  MdForumOutlined,
  MdInstalldesktopOutlined,
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
  BiInboxesFill,
  MdForumOutlined,
  MdInstalldesktopOutlined,
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
