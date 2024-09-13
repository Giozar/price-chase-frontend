import React from 'react';
import type { Product } from "../interfaces/Product";
import ProductCard from "./ProductCard";

export default function ProductList({products}:{products: Product[]}) {
    return (
        <div>
            <h2 className="sectionTitle">Productos Principales</h2>
            <div className="productsGrid">
              {products.length > 0 && products.map((product, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
    )
};
