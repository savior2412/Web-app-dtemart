import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ imageSrc, altText, title, category, price, originalPrice, discountPercentage, id }) => (
 <Link href={`/products/${id}`} legacyBehavior>
  <div className="bg-white shadow-md overflow-hidden flex flex-col items-center pb-3 relative cursor-pointer">
   {discountPercentage && (
    <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg z-10">
     -{discountPercentage}%
    </div>
   )}
   <Image
    src={imageSrc}
    alt={altText}
    width={150}
    height={160}
    objectFit="cover"
    className="w-full h-40 mb-2"
    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x160/cccccc/000000?text=Sản+phẩm"; }}
   />
   <div className="w-full px-3 text-left">
    <h3 className="font-semibold text-gray-800 text-sm line-clamp-2 h-10 mb-1">{title}</h3>
    <div className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-md inline-block mb-1">
     {category}
    </div>
    <div className="flex items-baseline justify-between mt-1">
     <p className="text-lg font-bold text-red-600">{price}</p>
     {originalPrice && <p className="text-xs text-gray-500 line-through ml-2">{originalPrice}</p>}
    </div>
   </div>
  </div>
 </Link>
);

export default ProductCard;
