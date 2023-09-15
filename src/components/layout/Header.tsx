import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "../ui/button";

interface HeaderAbdullahProps {}

const Header: FC = ({}) => {
  return (
    <div className="h-[70px] z-[40] bg-white fixed  top-0  w-full ">
      <div className="container mx-auto h-full flex items-center justify-between">
        <Link
          href="/"
          className="mr-2 flex w-full items-center justify-center md:w-auto "
        >
          <Image src="/brand.png" alt="logo" width={80} height={80} />
        </Link>
        <Link href="/signin">
          <Button>Sign in</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
