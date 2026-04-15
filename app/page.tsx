
import { Suspense } from "react";
import { getProducts } from "@/lib/api";
import { ProductSearch } from "@/components/common/ProductSearch";
import { ProductGrid } from "@/components/common/ProductGrid";
import { Pagination } from "@/components/common/Pagination";

interface PageProps {
  searchParams: Promise<{
    q?: string;
    category?: string;
    page?: string;
  }>;
}

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const search = params.q || "";
  const category = params.category || "";
  const page = parseInt(params.page || "1", 10);

  const { products, total, limit } = await getProducts(page - 1, search, category);
  const totalPages = Math.ceil(total / limit);

  // Get unique categories for the filter
  const categories: string[] = Array.from(new Set(products.map((p) => p.category))).sort();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Product Explorer</h1>
          <p className="text-gray-600">Discover amazing products from around the world</p>
        </div>

        <Suspense fallback={<div className="h-32 bg-gray-200 rounded-lg animate-pulse" />}>
          <ProductSearch
            categories={categories}
            initialSearch={search}
            initialCategory={category}
          />
        </Suspense>

        <div className="mt-8">
          <Suspense fallback={<ProductGridSkeleton />}>
            <ProductGrid products={products} />
          </Suspense>
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex justify-center">
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              search={search}
              category={category}
            />
          </div>
        )}
      </div>
    </div>
  );
}

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="aspect-square bg-gray-200 rounded-lg mb-4 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse" />
          <div className="h-3 bg-gray-200 rounded mb-2 animate-pulse" />
          <div className="h-3 bg-gray-200 rounded animate-pulse" />
        </div>
      ))}
    </div>
  );
}
