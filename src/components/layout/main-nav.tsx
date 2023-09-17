"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import Image from "next/image";

import { usePathname } from "next/navigation";

const items = [
  { name: "overview", path: "/admin" },
  { name: "Customers", path: "/admin/customers" },
  { name: "Products", path: "/admin/products" },
  { name: "Settings", path: "/admin/settings" },
];

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const path = usePathname();
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/admin"
        className={` mr-2 flex w-full items-center justify-center md:w-auto
        
        `}
      >
        <Image src="/myLogo.jpg" alt="logo" width={40} height={40} />
      </Link>

      {items.map((item) => {
        return (
          <Link
            key={item.name + "id"}
            href={item.path}
            className={`text-sm font-medium  rounded-full p-2 transition-colors hover:text-primary
          ${path === item.path ? "text-black bg-[#adfa1d]" : ""}
          `}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
