import { IoPhonePortrait } from "react-icons/io5";

export default function Ads() {
  return (
    <section className="w-[270px] h-[200px] bg-[#FEB35F] py-[30px] rounded-lg text-center">
      <div className="mb-6 w-full h-[69.89px] flex justify-center">
        <IoPhonePortrait size={69} color={"#C3CAD9"}/>
      </div>
      <p className="mb-[10px] font-bold text-xs text-[#FF6633]">
        Do you need help?
      </p>
      <p className="mb-[10px] font-black text-xs text-[#8833FF]">
        1-800-MY-BANK
      </p>
    </section>
  );
}
