import Button from "@/components/button";
import { CircularProgress } from "@mui/material";
import { IoAdd, IoPerson } from "react-icons/io5";

export default function Profile() {
  return (
    <section className="mb-[33px]">
      <div className="flex justify-between ms-[7px]">
        <div className="w-[30px] h-[30px]">
        <IoPerson size={18} fill={"#C3CAD9"}/>
        </div>
        <Button />
      </div>
        <div className=" mb-10 flex justify-center items-center">
      <div className="w-[152px] h-[130px] relative rounded-full flex justify-center items-center">
      <CircularProgress
        variant="determinate"
        value={75}
        thickness={1} 
        sx={{ width: 100, height: 100,color: '#8833FF' }} 
        style={{position: "absolute", width: "100%", height: "100%"}}
      />
        <IoPerson size={110}/>
        <span className="absolute h-[40px] w-[40px] rounded-full bg-[#FF6633] shadow-[#FF66331A] rounded-full top-[45px] left-[112px] gap-5 flex justify-center items-center"><div className="rounded-full h-[18px] w-[18px] bg-white flex items-center justify-center"><IoAdd color={"FF6633"}/></div></span>

      </div>
        </div>
      <h6 className="font-bold text-base text-blue-600">Clayton Santos</h6>
    </section>
  );
}
