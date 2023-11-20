import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52"></div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="authentication-img flex justify-end items-center">
          <Image
            src="/hero-img.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt=""
          />
        </div>
        <div className="flex justify-center flex-col">
          <h3 className="text-3xl font-bold text-orange-500">Hệ thống</h3>
          <h2 className="text-5xl font-bold leading-normal tracking-normal text-orange-500">
            Quản lý dữ liệu
          </h2>
          <Link
            href="/auth/login"
            className="self-start
             rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span className=" items-center flex gap-2">
              Log in
              <ArrowRightOutlined />
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
