import type { Metadata } from "next";
import { redirect } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AddProductForm from "@/components/forms/add-product-form";
import { MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "New Product",
  description: "Add a new product",
};

interface NewProductPageProps {
  params: {
    storeId: string;
  };
}

export default async function NewProductPage({ params }: NewProductPageProps) {
  return (
    <div className="w-full h-full flex flex-col items-start">
      <div className="w-full  h-[100px] flex items-center justify-start">
        <Link href="/admin/products">
          <Button variant="ghost" size="icon">
            <MoveLeft className="text-gray-900 w-4 h-4 " />
          </Button>
        </Link>
        <h1 className="text-xl font-bold text-gray-900">Add product</h1>
      </div>
      <AddProductForm />
    </div>
  );
}
