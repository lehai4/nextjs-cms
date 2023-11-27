"use client";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Button, List, Popover, Space } from "antd";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import AndyLogo from "../logo";
import Image from "next/image";

export const Header = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="relative w-full h-[89px] z-40">
      <div className="h-full w-full shadow-md">
        <div className="px-[14px] h-full container">
          <div className="h-full flex flex-row items-center justify-between">
            <AndyLogo css={"text-black"} />
            {children}
            <div className="text-xl gap-2 flex h-full">
              <SearchOutlined />
              <ShoppingCartOutlined />
              {session?.user && (
                <Popover
                  content={
                    <div>
                      <List>
                        <List.Item>Username: {session?.user.name}</List.Item>
                        <List.Item>Email: {session?.user.email}</List.Item>
                        <Space
                          align="center"
                          direction="horizontal"
                          className="pt-[5px]"
                        >
                          <Button onClick={() => signOut()}>Logout</Button>
                          <Link href="/dashboard/profile">
                            <Button type="primary" className="bg-blue-500">
                              Profile
                            </Button>
                          </Link>
                        </Space>
                      </List>
                    </div>
                  }
                >
                  <Image
                    src={`${
                      session?.user?.image
                        ? session?.user?.image
                        : "/default_user.png"
                    }`}
                    className="rounded-full relative h-3/6 w-6/12 top-[50%] -translate-y-2/4"
                    width={50}
                    height={50}
                    alt="Picture of the user"
                    priority
                  />
                </Popover>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 bg-white shadow-md left-0 h-[89px] w-full z-50 -translate-y-full transition-transform duration-400 ease-in ${
          scrollPosition > 95 ? "translate-y-0" : ""
        }`}
      >
        <div className="px-[14px] h-full container">
          <div className="h-full flex flex-row items-center justify-between">
            <AndyLogo css={"text-black"} />
            {children}
            <div className="text-xl gap-2 flex h-full">
              <SearchOutlined />
              <ShoppingCartOutlined />
              {session?.user && (
                <Popover
                  content={
                    <div>
                      <List>
                        <List.Item>Username: {session?.user.name}</List.Item>
                        <List.Item>Email: {session?.user.email}</List.Item>
                        <Space
                          align="center"
                          direction="horizontal"
                          className="pt-[5px]"
                        >
                          <Button onClick={() => signOut()}>Logout</Button>
                          <Link href="/dashboard/profile">
                            <Button type="primary" className="bg-blue-500">
                              Profile
                            </Button>
                          </Link>
                        </Space>
                      </List>
                    </div>
                  }
                >
                  <Image
                    src={`${
                      session?.user?.image
                        ? session?.user?.image
                        : "/default_user.png"
                    }`}
                    className="rounded-full relative h-3/6 w-6/12 top-[50%] -translate-y-2/4"
                    width={50}
                    height={50}
                    alt="Picture of the user"
                    priority
                  />
                </Popover>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
