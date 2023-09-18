import { MainNav } from "@/components/layout/main-nav";
import { UserNav } from "@/components/user-nav";

import { Metadata } from "next";

import { Separator } from "@/components/ui/separator";
import { SidebarNav } from "@/components/sidebar-nav";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "shope dz",
  description: "Advanced form example using react-hook-form and Zod.",
};

const sidebarNavItems = [
  {
    title: "overview",
    href: "/admin",
  },
  {
    title: "Customers",
    href: "/admin/customers",
  },
  {
    title: "Products",
    href: "/admin/products",
  },
  {
    title: "Orders",
    href: "/admin/products",
  },
  {
    title: "My store",
    href: "/admin/settings",
  },
  {
    title: "Settings",
    href: "/admin/settings",
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="border-b fixed top-0 z-99 flex justify-center shadow-sm  w-full h-16 bg-black ">
        <div className="flex container mx-auto h-16 justify-between items-center px-4">
          <Link
            href="/"
            className="mr-2 flex w-full items-center justify-center md:w-auto "
          >
            <Image src="/myLogoBlack.jpg" alt="logo" width={40} height={40} />
          </Link>
          <div>
            <UserNav />
          </div>
        </div>
      </div>
      <div className="  space-y-6 mt-16   block">
        <div className="flex flex-col  lg:flex-row ">
          <aside className=" fixed h-screen bg-zinc-100 w-[15%] p-2">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className=" min-h-screen  p-4  w-[85%] ml-[15%] ">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
