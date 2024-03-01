import Link from "next/link";

// icopns
import { RiInstagramLine, RiLinkedinLine, RiGithubLine } from "react-icons/ri";

import { SiLeetcode, SiCodechef } from "react-icons/si";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 lg:gap-x-8 text-lg lg:text-3xl">
      <Link
        href={"https://github.com/abhishekkumar7983"}
        target="blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/abhishek-kumar-4a694924a/"}
        target="blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={"https://leetcode.com/abhishek9984/"}
        target="blank"
        className="hover:text-accent transition-all duration-300"
      >
        <SiLeetcode />
      </Link>
      <Link
        href={"https://www.codechef.com/users/abhishek9984"}
        target="blank"
        className="hover:text-accent transition-all duration-300"
      >
        <SiCodechef />
      </Link>
      <Link
        href={"https://www.instagram.com/marvelabhi45/"}
        target="blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
    </div>
  );
};

export default Socials;
