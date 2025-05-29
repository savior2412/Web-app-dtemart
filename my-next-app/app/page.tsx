'use client'; // This is a Client Component because it uses useState and useEffect

import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Import Link
import Image from 'next/image'; // Import Image for optimized images
import { Bell, Search, ChevronRight, ShoppingCart, Home, Percent, Heart, User, Phone, Mail, Facebook, Twitter, Instagram, Apple, Carrot, Fish, ShoppingBag, Drumstick, Coffee, Cake, Shrimp, Sprout, Milk, Utensils, Snowflake, MessageSquare } from 'lucide-react';

// Common Product Card Component - Defined directly in page.tsx for simplicity
interface ProductCardProps {
  imageSrc: string;
  altText: string;
  title: string;
  category: string;
  price: string;
  originalPrice?: string;
  discountPercentage?: number;
  id: string;
}
const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, altText, title, category, price, originalPrice, discountPercentage, id }) => (
  // Fixed: Removed legacyBehavior and moved className to Link directly
  <Link href={`/products/${id}`} className="block bg-white shadow-md overflow-hidden flex flex-col items-center pb-3 relative cursor-pointer">
    {/* Discount Badge */}
    {discountPercentage && (
      <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg z-10">
        -{discountPercentage}%
      </div>
    )}
    {/* Using next/image for optimized images */}
    <Image
      src={imageSrc}
      alt={altText}
      width={150} // Required for next/image
      height={160} // Required for next/image
      className="w-full h-40 object-cover mb-2"
      priority // Load eagerly for better LCP on initial viewport
      onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://placehold.co/150x160/cccccc/000000?text=Sản+phẩm"; }} // Fallback image adjusted
    />
    <div className="w-full px-3 text-left">
      {/* Title forced to 2 lines for consistent height using line-clamp-2 and a fixed height */}
      <h3 className="font-semibold text-gray-800 text-sm line-clamp-2 h-10 mb-1">{title}</h3>
      {/* Category as a styled badge/ribbon */}
      <div className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-md inline-block mb-1">
        {category}
      </div>
      <div className="flex items-baseline justify-between mt-1">
        <p className="text-lg font-bold text-red-600">{price}</p>
        {originalPrice && <p className="text-xs text-gray-500 line-through ml-2">{originalPrice}</p>}
      </div>
    </div>
  </Link>
);

// --- START: Dummy Product Data (Replace with your actual data source) ---
const products = [
  {
    id: '1',
    image: "https://picsum.photos/id/20/150/160",
    name: "Cà chua vườn tươi ngon",
    category: "Rau củ",
    price: "120.000đ",
    originalPrice: "150.000đ",
    discountPercentage: 20
  },
  {
    id: '2',
    image: "https://picsum.photos/id/160/150/160",
    name: "Điện thoại Apple iPhone 16 Pro Max 256GB Chính hãng",
    category: "Điện thoại",
    price: "31.890.000đ",
    originalPrice: "35.000.000đ",
    discountPercentage: 9
  },
  {
    id: '3',
    image: "https://picsum.photos/id/26/150/160",
    name: "Bông cải xanh hữu cơ",
    category: "Rau củ",
    price: "50.000đ",
    originalPrice: "60.000đ",
    discountPercentage: 16
  },
  {
    id: '4',
    image: "https://picsum.photos/id/161/150/160",
    name: "Camera Wifi Trong Nhà Xoay 360 Ezviz C6N 4MP 2K",
    category: "Thiết bị điện tử",
    price: "398.000đ",
    originalPrice: "680.000đ",
    discountPercentage: 42
  },
  {
    id: '5',
    image: "https://picsum.photos/id/28/150/160",
    name: "Sữa tươi không đường TH True Milk 1L",
    category: "Tạp hóa",
    price: "30.000đ",
    originalPrice: "32.000đ",
    discountPercentage: 6
  },
  {
    id: '6',
    image: "https://picsum.photos/id/29/150/160",
    name: "Thịt gà tươi nguyên con loại 1",
    category: "Thịt",
    price: "100.000đ",
    originalPrice: "110.000đ",
    discountPercentage: 9
  },
  {
    id: '7',
    image: "https://picsum.photos/id/30/150/160",
    name: "Cam sành ngọt lịm Vĩnh Long",
    category: "Trái cây",
    price: "45.000đ",
    originalPrice: "50.000đ",
    discountPercentage: 10
  },
  {
    id: '8',
    image: "https://picsum.photos/id/31/150/160",
    name: "Cà tím tươi sạch Đà Lạt",
    category: "Rau củ",
    price: "28.000đ",
    originalPrice: "30.000đ",
    discountPercentage: 7
  },
  {
    id: '9',
    image: "https://picsum.photos/id/22/150/160",
    name: "Táo tươi nhập khẩu New Zealand",
    category: "Trái cây",
    price: "80.000đ",
    originalPrice: "100.000đ",
    discountPercentage: 20
  },
  {
    id: '10',
    image: "https://picsum.photos/id/23/150/160",
    name: "Cá hồi Na Uy phi lê tươi sống",
    category: "Cá",
    price: "250.000đ",
    originalPrice: "280.000đ",
    discountPercentage: 11
  },
  {
    id: '11',
    image: "https://picsum.photos/id/32/150/160",
    name: "Gạo ST25 túi 5kg chuẩn Việt Nam",
    category: "Tạp hóa",
    price: "20.000đ",
    originalPrice: "22.000đ",
    discountPercentage: 9
  },
  {
    id: '12',
    image: "https://picsum.photos/id/33/150/160",
    name: "Thịt heo ba chỉ tươi ngon",
    category: "Thịt",
    price: "120.000đ",
    originalPrice: "135.000đ",
    discountPercentage: 11
  },
  {
    id: '13',
    image: "https://picsum.photos/id/34/150/160",
    name: "Nước khoáng Lavie 500ml thùng 24 chai",
    category: "Đồ uống",
    price: "10.000đ",
    originalPrice: "12.000đ",
    discountPercentage: 17
  },
  {
    id: '14',
    image: "https://picsum.photos/id/35/150/160",
    name: "Bánh mì sandwich nguyên cám",
    category: "Bánh kẹo",
    price: "15.000đ",
    originalPrice: "18.000đ",
    discountPercentage: 17
  },
  {
    id: '15',
    image: "https://picsum.photos/id/36/150/160",
    name: "Nho xanh không hạt nhập khẩu",
    category: "Trái cây",
    price: "90.000đ",
    originalPrice: "105.000đ",
    discountPercentage: 14
  },
  {
    id: '16',
    image: "https://picsum.photos/id/37/150/160",
    name: "Rau cải bó xôi tươi sạch hữu cơ",
    category: "Rau củ",
    price: "22.000đ",
    originalPrice: "25.000đ",
    discountPercentage: 12
  },
];
// --- END: Dummy Product Data ---

const categories = [
  { name: 'Trái cây', id: 10 },
  { name: 'Rau củ', id: 11 },
  { name: 'Cá', id: 12 },
  { name: 'Tạp hóa', id: 13 },
  { name: 'Thịt', id: 14 },
  { name: 'Đồ uống', id: 15 },
  { name: 'Bánh kẹo', id: 16 },
  { name: 'Hải sản', id: 17 },
  { name: 'Gia vị', id: 18 },
  { name: 'Sữa & Trứng', id: 19 },
  { name: 'Đồ ăn nhanh', id: 44 },
  { name: 'Đồ đông lạnh', id: 45 },
];


export default function HomePage() { // Changed to default export for app/page.tsx
  // Banner Slider Logic
  const bannerImages = [
    "https://picsum.photos/id/1015/400/150",
    "https://picsum.photos/id/1016/400/150",
    "https://picsum.photos/id/1018/400/150",
    "https://picsum.photos/id/1019/400/150",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % bannerImages.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [bannerImages.length]);

  // State for hiding/showing bottom navigation on scroll
  const [showBottomNav, setShowBottomNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) {
          setShowBottomNav(false);
        } else {
          setShowBottomNav(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [lastScrollY]);


  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased flex flex-col items-center">
      {/* Main container with max w-md for desktop and full width for mobile */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <header className="bg-green-500 text-white rounded-t-lg">
          {/* Top Bar with Logo and Icons */}
          <div className="p-4 flex items-center justify-between">
            {/* Using next/image for logo */}
            <Image src="/images/logo.png" alt="Otemart Logo" width={130} height={35} className="h-8" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://placehold.co/100x32/ffffff/000000?text=Otemart"; }} />
            <div className="flex items-center space-x-4">
              <ShoppingCart size={24} />
              <MessageSquare size={24} />
            </div>
          </div>

          {/* Search Bar */}
          <div className="p-4 flex items-center space-x-2">
            <div className="relative flex-grow">
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm sản phẩm..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
          </div>
        </header>

        {/* Banner Slider Section */}
        <div className="p-4">
          <div className="relative w-full h-36 rounded-lg overflow-hidden shadow-md">
            <Image
              src={bannerImages[currentImageIndex]}
              alt="Fresh & Healthy Banner"
              fill // Use fill for banners to cover the space
              className="object-cover transition-opacity duration-500 ease-in-out"
              priority // Load eagerly
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://placehold.co/400x150/16a34a/ffffff?text=FRESH+%26+HEALTHY+VEGETABLE"; }}
            />
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="text-white text-center">
                <p className="text-2xl font-bold">TƯƠI & KHỎẺ</p>
                <p className="text-lg">RAU CỦ QUẢ</p>
                <p className="text-4xl font-extrabold mt-2">GIẢM GIÁ</p>
                <p className="text-xl font-bold">LÊN ĐẾN 50%</p>
              </div>
            </div>
            {/* Navigation Dots */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
              {bannerImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    currentImageIndex === index ? 'bg-white' : 'bg-gray-400'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Explore Category Section */}
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-800">Khám phá danh mục</h2>
            <button className="text-sm text-green-600 font-semibold flex items-center">
              Xem tất cả <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
          {/* Horizontal scroll with two rows using grid */}
          <div className="overflow-x-auto pb-2 scrollbar-hide">
            <div className="grid grid-flow-col grid-rows-2 gap-x-2 gap-y-3 w-fit">
              {categories.map((category, index) => (
                <div key={index} className="flex-shrink-0 w-28 text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200 shadow-sm mx-auto">
                    <Image
                      src={`https://picsum.photos/id/${category.id}/80/80`} // Lorem Picsum for categories
                      alt={category.name}
                      width={80} // Required for next/image
                      height={80} // Required for next/image
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `https://placehold.co/80x80/cccccc/000000?text=${category.name.charAt(0)}`; }}
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-700">{category.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Suggested For You Section */}
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-800">Đề xuất cho bạn</h2>
            <button className="text-sm text-green-600 font-semibold flex items-center">
              Xem tất cả <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {products.slice(0, 8).map((product) => ( // Display first 8 products
              <ProductCard
                key={product.id}
                id={product.id}
                imageSrc={product.image}
                altText={product.name}
                title={product.name}
                category={product.category}
                price={product.price}
                originalPrice={product.originalPrice}
                discountPercentage={product.discountPercentage}
              />
            ))}
          </div>
        </div>

        {/* Best Selling Products Section */}
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-800">Sản phẩm bán chạy nhất</h2>
            <button className="text-sm text-green-600 font-semibold flex items-center">
              Xem tất cả <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {products.slice(8, 16).map((product) => ( // Display next 8 products
              <ProductCard
                key={product.id}
                id={product.id}
                imageSrc={product.image}
                altText={product.name}
                title={product.name}
                category={product.category}
                price={product.price}
                originalPrice={product.originalPrice}
                discountPercentage={product.discountPercentage}
              />
            ))}
          </div>
        </div>

        {/* Related Products Section (can use a different slice or filter of products) */}
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-800">Sản phẩm liên quan</h2>
            <button className="text-sm text-green-600 font-semibold flex items-center">
              Xem tất cả <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {products.slice(0, 4).map((product) => ( // Example: show first 4 again as "related"
              <ProductCard
                key={product.id}
                id={product.id}
                imageSrc={product.image}
                altText={product.name}
                title={product.name}
                category={product.category}
                price={product.price}
                originalPrice={product.originalPrice}
                discountPercentage={product.discountPercentage}
              />
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="p-4 bg-green-100 rounded-lg mx-4 mb-4 shadow-sm">
          <h2 className="text-lg font-bold text-green-800 mb-3">Liên hệ với chúng tôi</h2>
          <div className="flex items-center mb-2">
            <Phone size={18} className="text-green-700 mr-2" />
            <p className="text-gray-700 text-sm">Điện thoại: 0123 456 789</p>
          </div>
          <div className="flex items-center mb-2">
            <Mail size={18} className="text-green-700 mr-2" />
            <p className="text-gray-700 text-sm">Email: support@groceryapp.com</p>
          </div>
          <div className="flex items-center mt-3 space-x-4">
            <a href="#" className="text-green-700 hover:text-green-900"><Facebook size={20} /></a>
            <a href="#" className="text-green-700 hover:text-green-900"><Twitter size={20} /></a>
            <a href="#" className="text-green-700 hover:text-green-900"><Instagram size={20} /></a>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="bg-gray-800 text-white p-6 rounded-b-lg text-center">
          <p className="text-sm mb-2">© 2024 Otemart. Tất cả quyền được bảo bảo lưu.</p>
          <div className="flex justify-center space-x-4 text-sm">
            <a href="#" className="hover:underline">Chính sách bảo mật</a>
            <a href="#" className="hover:underline">Điều khoản dịch vụ</a>
          </div>
        </footer>

        {/* Bottom Navigation */}
        <div className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200 p-4 flex justify-around items-center rounded-b-lg shadow-inner transition-transform duration-300 z-50 ${showBottomNav ? 'translate-y-0' : 'translate-y-[120%]'}`}>
          <button className="flex flex-col items-center text-green-600">
            <Home size={24} />
            <span className="text-xs mt-1">Trang chủ</span>
          </button>
          <button className="flex flex-col items-center text-gray-500">
            <Percent size={24} />
            <span className="text-xs mt-1">Ưu đãi</span>
          </button>
          <button className="bg-green-500 text-white p-4 rounded-full shadow-lg -mt-8 transform hover:scale-105 transition-transform">
            <ShoppingCart size={28} />
          </button>
          <button className="flex flex-col items-center text-gray-500">
            <Heart size={24} />
            <span className="text-xs mt-1">Yêu thích</span>
          </button>
          <button className="flex flex-col items-center text-gray-500">
            <User size={24} />
            <span className="text-xs mt-1">Tài khoản</span>
          </button>
        </div>
      </div>
    </div>
  );
}
