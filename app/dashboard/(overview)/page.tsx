import Section from "@/app/components/section";
import CatelogView from "@/app/ui/catelog/catelogView";
import Intro from "@/app/ui/intro";
import Product from "@/app/ui/products";
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
            <div className="ml-[0px] mr-[0px] flex-wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              <div className="relative top-[5.5px] hidden sm:block md:block lg:block">
                <Image
                  src="https://preview.colorlib.com/theme/aroma/img/home/hero-banner.png.webp"
                  preview={false}
                />
              </div>
              <div className="pl-[24px] md:pl-[48px] lg:pl-[0px] lg:ml-[77px] xl:ml-[92px] col-span-1 md:col-span-1 sm:col-span-1 lg:col-span-1 xl:col-span-2">
                <div className="pb-[50px] sm:p-[0px] md:p-[0px] lg:p-[0px]  max-w-[495px] flex flex-col h-full justify-center">
                  <h4 className="text-[30px] mb-[12px] text-slate-500 leading-[39px] tracking-tight">
                    Shop is fun
                  </h4>
                  <h1 className="text-[25px] md:text-[30px] leading-[33px] lg:text-[50px] font-bold m-[0px] uppercase lg:leading-[55px] tracking-tight">
                    Browse Our Premium Product
                  </h1>
                  <p className="py-[8px] sm:py-[12px] md:py-[25px] lg:py-[25px] text-[15px] text-slate-500 leading-[25px]">
                    Us which over of signs divide dominion deep fill bring
                    they're meat beho upon own earth without morning over third.
                    Their male dry. They are great appear whose land fly grass.
                  </p>

                  <Link href="/#">
                    <button className="rounded-full border border-blue-600 text-base px-[25px] md:px-[30px] lg:px-[30px] py-[8px] md:py-[12px] lg:py-[12px] bg-blue-600 text-white hover:text-blue-600 hover:bg-white  duration-300 ease-in">
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
      <Section className="section-product">
        <Product />
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
