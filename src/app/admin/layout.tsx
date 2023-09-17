import { MainNav } from "@/components/layout/main-nav";
import { UserNav } from "@/components/user-nav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-fit ">
      <div className="border-b fixed top-0 z-99 flex justify-center  w-full h-16 bg-white ">
        <div className="flex container mx-auto h-16 justify-between items-center px-4">
          <MainNav />
          <div>
            <UserNav />
          </div>
        </div>
      </div>
      <div className="container mx-auto ">{children}</div>
    </div>
  );
}
