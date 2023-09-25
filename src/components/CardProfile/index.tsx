import "@fontsource-variable/montserrat";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IconContext } from "react-icons";

interface ProfileTypes {
  name: string;  
  email: string;
  profession: string;
  phone: string;
  aboutMe: string;
  image: string;
}

export default function CardProfile({
  name,
  email,
  profession,
  phone,
  aboutMe,
  image,
}: ProfileTypes) {
  return (
    <div className="flex flex-col items-center m-5 w-[320px] h-[560px] bg-white rounded-xl shadow-lg">
      <div className="flex items-center justify-center w-[90%] h-[50%] mt-[5%] rounded-[50%] bg-slate-400">
        <img
          className="w-full h-full rounded-xl"
          src={image}
          alt="Foto Jose Carrizales"
        />
      </div>
      <div className="flex flex-col mt-5 gap-5 w-[90%]">
        <div>
          <p className=" font-Monserrat font-semibold text-lg text-[#4F4F4F]">
            {name}
          </p>
          <p className="font-Monserrat font-medium text-sm text-[#828282]">
            {profession}
          </p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <IconContext.Provider value={{ color: "#4F4F4F", size: "15px" }}>
              <IoMdMail />
            </IconContext.Provider>
            <p className=" font-Monserrat font-medium text-[#4F4F4F]">
              {email}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <IconContext.Provider value={{ color: "#4F4F4F", size: "15px" }}>
              <FaPhoneAlt />
            </IconContext.Provider>
            <p className=" font-Monserrat font-medium text-[#4F4F4F]">
              {phone}
            </p>
          </div>
        </div>
        <p className="line-clamp-3 font-Monserrat font-medium text-sm w-[90%] text-[#828282]">{aboutMe}</p>
      </div>
    </div>
  );
}
