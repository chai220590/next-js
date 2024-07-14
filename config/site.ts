export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Demo Name",
  description: "Demo Description",
  navItems: [
    {
      label: "Trang chủ",
      href: "/",
    },
    {
      label: "Giới thiệu",
      href: "/docs",
    },
    {
      label: "Sản Phẩm",
      href: "/pricing",
    },
    {
      label: "Tin tức",
      href: "/news",
    },
    {
      label: "Liên hệ",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Trang chủ",
      href: "/",
    },
    {
      label: "Giới thiệu",
      href: "/docs",
    },
    {
      label: "Sản Phẩm",
      href: "/pricing",
    },
    {
      label: "Tin tức",
      href: "/news",
    },
    {
      label: "Liên hệ",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
