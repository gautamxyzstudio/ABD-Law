import { Logo } from "../../exports";


interface ICustomLogoProps {
  imgStyle?: string;
  fontStyle?: string;
}

const CustomLogo = ({ imgStyle, fontStyle }: ICustomLogoProps) => {
  return (
    <div className="flex w-full gap-x-2 items-center">
      <img
        src={Logo}
        alt="ABD LAW CORPORATION"
        className={imgStyle ? imgStyle : "h-[140px]"}
      />
      <p
        className={`${
          fontStyle ? fontStyle : "text-3xl"
        } font-black bg-gradient-to-b from-0% from-[#E4A200] to-60% to-[#F9EC76] text-transparent bg-clip-text`}
      >
        ABD LAW CORPORATION
      </p>
    </div>
  );
};

export default CustomLogo;
