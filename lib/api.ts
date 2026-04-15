import { baseURL } from "@/config/api";
import { ProductsResponse } from "@/types/items";

export async function getProducts(page: number = 0, search: string = "", category: string = ""): Promise<ProductsResponse> {
  const params = new URLSearchParams({
    limit: "20",
    skip: (page * 20).toString(),
  });

  if (search) params.set("q", search);

  const url = category
    ? `${baseURL}/products/category/${encodeURIComponent(category)}?${params}`
    : `${baseURL}/products/search?${params}`;

  const res = await fetch(url, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch products");

  return res.json();
}

export async function getProduct(id: string) {
  const res = await fetch(`${baseURL}/products/${id}`, {
    cache: "force-cache",
  });

  if (!res.ok) throw new Error("Failed to fetch product");

  return res.json();
}

export async function getCategories(): Promise<string[]> {
  const res = await fetch(`${baseURL}/products/categories`, {
    cache: "force-cache",
  });

  if (!res.ok) throw new Error("Failed to fetch categories");

  return res.json();
}