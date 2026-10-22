import { Download } from "lucide-react";
import Arrow from "../assets/Vector.png";
import Graffiti from "../assets/doodles mixed round.png";
import Image from "next/image";
import Logo from "../assets/Logo.png";

export default function Home() {
  return (
    <div className=" w-full max-w-360 text-[#EEEEEE]">
      <div className="flex items-center justify-between w-full px-24 py-12 border-b border-b-[#EEEEEE]/10 ">
        <h1 className="font-oswald font-bold text-[24px]">My Portfolio</h1>
        <div className="flex items-center gap-12 font-poppins text-[18px] cursor-pointer">
          <nav>Home</nav>
          <nav>About Me</nav>
          <nav>Contact</nav>
        </div>
      </div>
      <div className="flex items-center justify-between relative">
        <div className="">
          <Image src={Arrow} alt="" className="absolute left-12 top-20" />
          <div className="absolute left-34 flex flex-col gap-12 top-8.5">
            <div className="text-[96px]">
              <h1 className="font-poppins font-bold leading-none">
                Frontend <br />
                <span className="text-[#00ADB5]">Developer</span>
              </h1>
            </div>
            <div className="flex items-center gap-6">
              <button className="py-2.5 px-8 text-[#EEEEEE] bg-[#00ADB5] rounded-4xl cursor-pointer text-shadow-lg text-shadow-black/50 text-[18px] text-bold">
                Hire me
              </button>
              <button className="flex items-center gap-2.5 py-2.5 px-8 text-[#EEEEEE] bg-[#393E46] rounded-4xl cursor-pointer text-shadow-lg text-shadow-black/50 text-[18px] text-bold">
                Download CV <Download />
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image src={Graffiti} alt="" />
          <Image src={Logo} alt="" className="absolute top-40" />
        </div>
      </div>
    </div>
  );
}
