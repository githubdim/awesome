import React from "react";
import { Image } from "@heroui/react";

interface ImageGalleryProps {
  images: string[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = React.useState(images[0]);

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full aspect-square rounded-large overflow-hidden">
        <Image
          src={selectedImage}
          alt="Product image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex gap-2 overflow-x-auto">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`w-20 h-20 rounded-large overflow-hidden border-2 ${
              selectedImage === image ? "border-primary" : "border-transparent"
            }`}
          >
            <Image
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}