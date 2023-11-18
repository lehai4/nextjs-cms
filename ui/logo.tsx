import { lusitana } from "@/ui/fonts";
import { StarOutlined } from "@ant-design/icons";
export default function AndyLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <StarOutlined className="text-3xl h-12 w-12 rotate-[15deg]" />
      <p className="text-3xl">Andy</p>
    </div>
  );
}
