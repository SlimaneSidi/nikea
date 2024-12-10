import { Product } from "@prisma/client";
import Link from "next/link";
import PriceTag from "./PriceTag";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isNew =
    Date.now() - new Date(product.createdAt).getTime() <
    1000 * 60 * 60 * 24 * 7;

  return (
    <Link
      href={"/products/" + product.id}
      className="card w-full bg-base-100 dark:bg-blue-950/80 transition-shadow hover:shadow-xl"
    >
      <figure>
        <Image
          src={product.imageUrl_}
          alt={product.name}
          width={800}
          height={400}
          className="h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-gray-800 dark:text-white">{product.name}</h2>
        {isNew && <div className="badge badge-secondary">NEW</div>}
        <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
        <PriceTag price={product.price} />
      </div>
    </Link>
  );
}