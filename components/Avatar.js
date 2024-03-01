// next image
import Image from "next/image";
import avatarimg from "/public/avatar.png";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={avatarimg}
        width={600}
        height={678}
        alt=""
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
