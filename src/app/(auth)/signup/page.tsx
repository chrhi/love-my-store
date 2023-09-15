import { SignUnForm } from "@/components/forms/sign-up";
import Header from "@/components/layout/Header";

import React, { Suspense } from "react";

function page() {
  return (
    <div className="w-full bg-white min-h-screen h-full ">
      <Suspense>
        <Header />
      </Suspense>

      <SignUnForm />
    </div>
  );
}

export default page;
