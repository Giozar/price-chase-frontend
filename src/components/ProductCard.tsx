import type { Product } from "../interfaces/Product";
export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="productCard">
      <h3 className="productName">{product.name}</h3>
      <p className="productPrice">
        Precio: ${product.price.toFixed(2)}
      </p>
      <p className="productPrice productPriceLowest">
        Descripción: ${product.description}
      </p>
      <p className="productSources">Fuentes: {product.store}</p>
      <p className="productSources">Fecha de consulta: {product.lastChecked}</p>
    </div>
  );
}
