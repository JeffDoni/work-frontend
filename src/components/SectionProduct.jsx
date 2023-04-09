import React, { useContext, useRef, useState } from 'react';
import ProductContext from '../context/ProductContext';
import Image from 'next/image';
import styles from '../styles/SectionProduct.module.css';
import { getProductById } from '@/services/services';

export default function SectionProduct() {
  const { list } = useContext(ProductContext);
  const galleryRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handlePrev = () => {
    galleryRef.current.scrollLeft -= galleryRef.current.offsetWidth;
  };

  const handleNext = () => {
    galleryRef.current.scrollLeft += galleryRef.current.offsetWidth;
  };

  const handleProductClick = async (productId) => {
    try {
      const product = await getProductById(productId);
      setSelectedProduct(product);
    } catch (error) {
      console.error('Failed to fetch product details:', error);
    }
  };
  console.log(selectedProduct)

  return (
    <section className={styles.sectionProduct}>
      {selectedProduct && (
          <div className={styles.productDetails}>
            <div className={styles.productImage}>
              <Image
                src={selectedProduct.thumbnail}
                alt={selectedProduct.title}
                width={400}
                height={200}
              />
            </div>
            <div className={styles.productInfo}>
              <p>R${selectedProduct.price}</p>
              <h2>{selectedProduct.title}</h2>
              <button className={styles.btn}>Buy</button>
            </div>
          </div>
        )}
      <div className={styles.container}>
        <div className={styles.gallery} ref={galleryRef}>
          {list.map((e) => (
            <div
              key={e.id}
              className={styles.galleryItem}
              onClick={() => handleProductClick(e.id)}
            >
              <Image src={e.thumbnail} alt={e.title} width={100} height={100} />
              <p className={styles.price}>R${e.price}</p>
            </div>
          ))}
        </div>
        <div className={styles.prev} onClick={handlePrev}></div>
        <div className={styles.next} onClick={handleNext}></div>
      </div>
    </section>
  );
}




