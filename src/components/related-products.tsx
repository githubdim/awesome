import React from "react";
import { Card, CardBody, CardFooter, Image } from "@heroui/react";
import type { Product } from "../types/product";

interface RelatedProductsProps {
  products: Product[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-semibold">Похожие товары</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <Card key={product.id} isPressable>
            <CardBody className="p-0">
              <Image
                src={product.images[0]}
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
            </CardBody>
            <CardFooter className="flex flex-col items-start">
              <h4 className="font-semibold">{product.name}</h4>
              <p className="text-default-500">{product.price.toFixed(2)} ₽</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}