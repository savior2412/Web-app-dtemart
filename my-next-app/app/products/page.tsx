'use client'; // Quan trọng: Bắt buộc phải có dòng này ở đầu tệp

import React from 'react';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const { id } = params; // Lấy ID sản phẩm từ URL params

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Trang chi tiết sản phẩm</h1>
      <p>ID sản phẩm: {id}</p>
      <p>Nếu bạn thấy trang này, nghĩa là routing đang hoạt động!</p>
      <p>Hãy kiểm tra lại console của trình duyệt nếu vẫn không thấy gì.</p>
    </div>
  );
}
