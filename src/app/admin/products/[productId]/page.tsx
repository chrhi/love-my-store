import { type Metadata } from "next";
import { notFound } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface UpdateProductPageProps {
  params: {
    storeId: string;
    productId: string;
  };
}

export default async function UpdateProductPage({
  params,
}: UpdateProductPageProps) {
  const productId = Number(params.productId);

  return <Card></Card>;
}
