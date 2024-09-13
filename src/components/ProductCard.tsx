import type { Product } from "../interfaces/Product";
export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="productCard">
      <h3 className="productName">{product.name}</h3>
      <p className="productPrice">
        Precio promedio: ${product.avgPrice.toFixed(2)}
      </p>
      <p className="productPrice productPriceLowest">
        Precio más bajo: ${product.lowestPrice.toFixed(2)}
      </p>
      <p className="productSources">Fuentes: {product.sources.join(", ")}</p>
    </div>
  );
}
