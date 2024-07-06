import Button from "@/components/button";
import { AccountsCard } from "@/constants";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";

export default function Accounts() {
  return (
    <section className="mb-[42px]">
      <div className="flex justify-between mb-[30px]">
        <p className="font-bold text-[#6B7A99] text-[12px]">
          Accounts and Cards
        </p>
        <Button />
      </div>
      <ul>
        {AccountsCard.map((account, index) => (
          <li className="flex mb-5 items-center" key={account.id}>
            <div className={`relative w-[65px] h-[40px] ps-[7px] pt-[5px] rounded-sm pb-[25px] me-[30px] ${index === 0 ? "bg-gradient-to-t from-purple-600 via-transparent to-pink-300" : index === 1 ? "bg-gradient-to-r from-orange-400 via-transparent to-yellow-300 " : "bg-gradient-to-r from-gray-700 to-gray-600 "}`}>
              <h6 className="font-bold text-[10px] text-white text-start">{account.cardNumber}</h6>
              {!account.isVisa ? <div className="absolute top-[20px] left-[36px]">
                <div className="relative">

                <div className="w-[14px] h-[14px] bg-[#EB001B] rounded-full"></div>
                <div className="w-[14px] h-[14px] bg-[#F79E1B] rounded-full absolute top-0 left-[10px]"></div>
                </div>
                </div> : <h6 className="absolute top-[20px] left-[36px] text-white text-xs">VISA</h6>}
            </div>
            <div className="me-auto">
              <p className="font-bold text-xs text-blue-700 me-auto">
                {account.cardType}
              </p>
              <p className="font-bold text-xs text-blue-600">
                {account.amount}
              </p>
            </div>
            <div className="w-[40px] h-[40px] shadow-[#26334D08] bg-[#FFFFFF] text-blue-600 rounded-full flex items-center justify-center">
              <IoArrowForward color={"#C3CAD9"} size={14}/>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
