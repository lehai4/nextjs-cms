import Section from "@/app/components/section";
import CatelogView from "@/app/ui/catelog/catelogView";
import Intro from "@/app/ui/intro";
import Subscribe from "@/app/ui/subscribe";
import { Image } from "antd";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Dashboard",
};
export default function Page() {
  return (
    <main className="site-main">
      <Section
        className="hero-banner relative mb-[10px]"
        style={{
          background: "#F1F6F7",
        }}
      >
        <div className="container">
          <div className="pt-[60px]">
            <div className="ml-[0px] mr-[0px] flex-wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <div className="relative top-[5.5px] ">
                <Image
                  src="https://preview.colorlib.com/theme/aroma/img/home/hero-banner.png.webp"
                  preview={false}
                />
              </div>
              <div className="ml-[92px] lg:pl-0 md:pl-5 col-span-2">
                <div className="max-w-[495px] flex flex-col h-full justify-center">
                  <h4 className="text-[2rem] text-slate-500">Shop is fun</h4>
                  <h1 className="text-[3rem] font-bold m-[0px] uppercase">
                    Browse Our Premium Product
                  </h1>
                  <p className="py-[25px] text-slate-500">
                    Us which over of signs divide dominion deep fill bring
                    they're meat beho upon own earth without morning over third.
                    Their male dry. They are great appear whose land fly grass.
                  </p>

                  <Link href="/#">
                    <button className="rounded-full border border-blue-600 text-base px-[30px] py-[12px] bg-blue-600 text-white hover:text-blue-600 hover:bg-white  duration-300 ease-in">
                      Browse Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section className="section-catelog">
        <CatelogView />
      </Section>
      <Section className="section-title mt-[120px] mb-[70px]">
        <Intro
          intro="Trending"
          introItalic="Product"
          des="Popular Item in the market"
        />
      </Section>
      <Section className="section-title mt-[120px] mb-[70px]">
        <Intro
          intro="Best"
          introItalic="Sellers"
          des="Popular Item in the market"
        />
      </Section>
      <Section className="section-title mt-[120px] mb-[70px]">
        <Intro
          intro="Latest"
          introItalic="News"
          des="Popular Item in the market"
        />
      </Section>
      <Section className="section-subscribe mb-[20px] lg:relative lg:top-[100px] lg:mb-[0px]">
        <Subscribe />
      </Section>
    </main>
  );
}
