import { Menu, MenuProps } from "antd";
import { useRouter } from "next/navigation";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Home", "/dashboard"),
  getItem("Shop", "/dashboard/shop", "", [
    getItem("Shop Category", "/dashboard/shop/shop-category", ""),
    getItem("Product Detail", "/dashboard/shop/product-detail", ""),
  ]),
  getItem("Blog", "/dashboard/blog", ""),
  getItem("Pages", "/dashboard/pages", ""),
  getItem("Contact", "/dashboard/contact", ""),
];
const MenuPage = () => {
  const router = useRouter();
  return (
    <Menu
      mode="horizontal"
      defaultSelectedKeys={["/dashboard"]}
      onClick={(e) => {
        router.push(`${e.key}`);
      }}
      items={items}
      style={{
        width: "inherit",
        float: "right",
        border: "none",
        fontSize: 16,
      }}
      className="bg-white"
    />
  );
};

export default MenuPage;
