export async function getProducts(page: number = 0, search: string = "") {
  const res = await fetch(
    `https://dummyjson.com/products/search?q=${search}&limit=20&skip=${page * 20}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch products");

  return res.json();
}

export async function getProduct(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "force-cache",
  });

  if (!res.ok) throw new Error("Failed to fetch product");

  return res.json();
}