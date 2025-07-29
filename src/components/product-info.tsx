import React from "react";
import { Button, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";

interface ProductInfoProps {
  name: string;
  price: number;
  description: string;
  rating: number;
  colors: string[];
  sizes: string[];
}

export function ProductInfo({ name, price, description, rating, colors, sizes }: ProductInfoProps) {
  const [selectedColor, setSelectedColor] = React.useState(colors[0]);
  const [selectedSize, setSelectedSize] = React.useState(sizes[0]);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold">{name}</h1>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                icon="solar:star-bold"
                className={i < rating ? "text-warning" : "text-default-300"}
              />
            ))}
          </div>
          <span className="text-default-500">({rating} / 5)</span>
        </div>
        <div className="mt-2 text-2xl font-semibold">${price.toFixed(2)}</div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Описание</h3>
        <p className="text-default-600">{description}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Цвет подсветки</h3>
        <div className="flex gap-2">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-8 h-8 rounded-full border-2 ${
                selectedColor === color ? "border-primary" : "border-transparent"
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Размер</h3>
        <div className="flex gap-2">
          {sizes.map((size) => (
            <Chip
              key={size}
              variant={selectedSize === size ? "solid" : "bordered"}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </Chip>
          ))}
        </div>
      </div>

      <Button
        size="lg"
        color="primary"
        startContent={<Icon icon="lucide:shopping-cart" />}
      >
        Добавить в корзину
      </Button>
    </div>
  );
}