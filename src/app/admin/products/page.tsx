import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { DateRangePicker } from "@/components/date-range-picker";
import { ProductsTableShell } from "@/components/shells/products-table-shell";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL ?? ""),
  title: "Products",
  description: "Manage your products",
};

interface ProductsPageProps {
  params: {
    storeId: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export default async function ProductsPage({
  params,
  searchParams,
}: ProductsPageProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 xs:flex-row xs:items-center xs:justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Products</h2>
        <DateRangePicker align="end" />
      </div>
      <ProductsTableShell data={[]} pageCount={6} />
    </div>
  );
}
