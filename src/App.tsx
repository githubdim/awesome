import {Tab, Tabs} from "@heroui/react";
import React from "react";

import {ImageGallery} from "./components/image-gallery";
import {ProductInfo} from "./components/product-info";
import {ProductReviews} from "./components/product-reviews";
import {ProductSpecs} from "./components/product-specs";
import {RelatedProducts} from "./components/related-products";

// Sample data
const product = {
  id: "1",
  name: "Волшебный Глобус-Ночник",
  price: 49.99,
  description: "Погрузитесь в мир мечтаний с нашим уникальным глобусом-ночником. Этот стильный и функциональный светильник не только осветит вашу комнату мягким, успокаивающим светом, но и станет прекрасным элементом декора. Идеально подходит для детских комнат, кабинетов и спален, создавая атмосферу уюта и вдохновляя на новые путешествия.",
  images: [
    "https://img.heroui.chat/image/furniture?w=800&h=800&u=globe1",
    "https://img.heroui.chat/image/furniture?w=800&h=800&u=globe2",
    "https://img.heroui.chat/image/furniture?w=800&h=800&u=globe3",
    "https://img.heroui.chat/image/furniture?w=800&h=800&u=globe4"
  ],
  colors: ["#87CEEB", "#FFD700", "#E6E6FA"],
  sizes: ["20 см", "25 см", "30 см"],
  specifications: {
    "Материал": "Экологичный пластик",
    "Источник света": "LED",
    "Питание": "USB / 3 батарейки AAA",
    "Режимы освещения": "3 (тёплый, холодный, смешанный)",
    "Вращение": "360°",
    "Гарантия": "1 год"
  },
  rating: 4.8,
  reviews: [
    {
      id: "r1",
      author: "Анна К.",
      rating: 5,
      comment: "Прекрасный ночник! Мой сын в восторге. Свет мягкий, глаза не устают.",
      date: "2024-03-15"
    },
    {
      id: "r2",
      author: "Михаил С.",
      rating: 4,
      comment: "Отличное качество, но хотелось бы больше вариантов цветов.",
      date: "2024-03-10"
    }
  ]
};

const relatedProducts = [
  {
    id: "related-1",
    name: "Светящаяся Луна",
    price: 39.99,
    images: ["https://img.heroui.chat/image/furniture?w=800&h=800&u=moon"],
    // ... other properties ...
  },
  {
    id: "related-2",
    name: "Звёздный Проектор",
    price: 59.99,
    images: ["https://img.heroui.chat/image/furniture?w=800&h=800&u=star_projector"],
    // ... other properties ...
  },
  {
    id: "related-3",
    name: "Светильник 'Космос'",
    price: 44.99,
    images: ["https://img.heroui.chat/image/furniture?w=800&h=800&u=space_lamp"],
    // ... other properties ...
  },
  {
    id: "related-4",
    name: "Настольная Лампа 'Ракета'",
    price: 34.99,
    images: ["https://img.heroui.chat/image/furniture?w=800&h=800&u=rocket_lamp"],
    // ... other properties ...
  }
];

export default function App() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <ImageGallery images={product.images} />
        <ProductInfo
          name={product.name}
          price={product.price}
          description={product.description}
          rating={product.rating}
          colors={product.colors}
          sizes={product.sizes}
        />
      </div>

      <Tabs aria-label="Product details" className="mb-8">
        <Tab key="specs" title="Specifications">
          <div className="py-4">
            <ProductSpecs specifications={product.specifications} />
          </div>
        </Tab>
        <Tab key="reviews" title="Reviews">
          <div className="py-4">
            <ProductReviews reviews={product.reviews} />
          </div>
        </Tab>
      </Tabs>

      <RelatedProducts products={relatedProducts} />
    </div>
  );
}