"use client";
import { Content } from "antd/es/layout/layout";
import { Suspense } from "react";
import FooterPage from "../ui/footer";
import { Header } from "../ui/header";
import MenuPage from "../ui/menu";
import Loading from "./(overview)/loading";

const LayoutDashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header>
        <MenuPage />
      </Header>
      <Content>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </Content>
      <FooterPage />
    </>
  );
};

export default LayoutDashboard;
