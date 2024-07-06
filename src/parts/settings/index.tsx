import Button from "@/components/button";
import { settingCard } from "@/interfaces";

import Image from "next/image";
import { IoDocumentAttach, IoLockClosed, IoPerson, IoSettings } from "react-icons/io5";

export default function Settings() {

   const SettingsCard: settingCard[] = [
    {
      id: 1,
      text: "Personal Information",
      icon: <IoPerson size={15}/>,
    },
    {
      id: 2,
      text: "Documents and Refere",
      icon: <IoDocumentAttach size={15}/>,
    },
    {
      id: 3,
      text: "Security & Codes",
      icon: <IoLockClosed size={15}/>,
    },
    {
      id: 4,
      text: "Account Settings",
      icon: <IoSettings size={18}/>,
    },
  ];

  return (
    <section className="mb-[25px]">
      <div className="flex justify-between mb-[30px]">
        <p className="font-bold text-[#6B7A99] text-[12px]">Settings</p>
        <Button />
      </div>
      <ul>
        {SettingsCard.map((setting) => (
          <li className="flex gap-5 items-center  mb-5" key={setting.id}>
            <div className="w-[40px] h-[40px] shadow-[#26334D08] bg-[#FFFFFF] rounded-full text-[#C3CAD9] flex justify-center items-center">
              {setting.icon}
            </div>
            <p className="font-bold text-xs text-blue-600">{setting.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
