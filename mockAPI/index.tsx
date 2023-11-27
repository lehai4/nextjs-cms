import { TypeBannerLink } from "@/interface";
import { PhoneFilled, MailOutlined } from "@ant-design/icons";
export const footerBannerLink: TypeBannerLink[] = [
  {
    title: "Home",
    path: "/dashboard",
  },
  {
    title: "Shop",
    path: "/dashboard/shop",
  },
  {
    title: "Blog",
    path: "/dashboard/blog",
  },
  {
    title: "Product",
    path: "/dashboard/product",
  },
  {
    title: "Brand",
    path: "/dashboard/brand",
  },
  {
    title: "Contact",
    path: "/dashboard/contact",
  },
];
export const footerBannerImage = [
  {
    url: "hero_r1_footer.png",
  },
  {
    url: "hero_r2_footer.png",
  },
  {
    url: "hero_r3_footer.png",
  },
  {
    url: "hero_r4_footer.png",
  },
  {
    url: "hero_r5_footer.png",
  },
  {
    url: "hero_r6_footer.png",
  },
];
export const footerBannerAddress = [
  {
    id: 0,
    intro: "Head Office",
    des: "70, Tan Binh, HCM",
    icon: <PhoneFilled />,
  },
  {
    id: 1,
    intro: "Phone Number",
    des: "+123 456 7890",
    desExtra: "+123 456 7890",
    icon: <PhoneFilled />,
  },
  {
    id: 2,
    intro: "Email",
    des: "free@infoexample.com",
    desExtra: "www.infoexample.com",
    icon: <MailOutlined />,
  },
];
