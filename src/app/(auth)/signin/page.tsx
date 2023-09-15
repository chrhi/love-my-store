import { SignInForm } from "@/components/forms/sign-in";
import Header from "@/components/layout/Header";
import React, { Suspense } from "react";

function page() {
  return (
    <div className="w-full bg-white  h-screen flex  flex-col  gap-x-8 gap-y-16">
      <Suspense>
        <Header />
      </Suspense>

      <SignInForm />
    </div>
  );
}

export default page;
