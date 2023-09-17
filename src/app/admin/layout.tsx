import { MainNav } from "@/components/layout/main-nav";
import { UserNav } from "@/components/user-nav";

import { Metadata } from "next";

import { Separator } from "@/components/ui/separator";
import { SidebarNav } from "@/components/sidebar-nav";

export const metadata: Metadata = {
  title: "shope dz",
  description: "Advanced form example using react-hook-form and Zod.",
};

const items = [
  { name: "overview", path: "/admin" },
  { name: "Customers", path: "/admin/customers" },
  { name: "Products", path: "/admin/products" },
  { name: "Settings", path: "/admin/settings" },
];

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
      <div className="border-b fixed top-0 z-99 flex justify-center  w-full h-16 bg-black ">
        <div className="flex container mx-auto h-16 justify-between items-center px-4">
          <MainNav />
          <div>
            <UserNav />
          </div>
        </div>
      </div>
      <div className="  space-y-6 p-10 pb-16 block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">
            Organization settings
          </h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  );
}
