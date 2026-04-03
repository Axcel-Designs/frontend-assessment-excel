import { getProduct } from "@/lib/api";

export async function generateMetadata({ params }: any) {
  const product = await getProduct(params.id);

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      images: [product.thumbnail],
    },
  };
}

export default async function DetailPage({ params }: any) {
  const product = await getProduct(params.id);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <img src={product.thumbnail} alt="" />
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
}