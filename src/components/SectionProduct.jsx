import React, { useContext, useEffect, useRef, useState } from 'react';
import ProductContext from '../context/ProductContext';
import Image from 'next/image';
import styles from '../styles/SectionProduct.module.css';
import { getProductById } from '@/services/services';
import MainProduct from './MainProduct';

export default function SectionProduct() {
  const { list } = useContext(ProductContext);
  const galleryRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (list.length > 0) {
      setSelectedProduct(list[0]);
    }
  }, [list]);

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
                width={250}
                height={250}
              />
            </div>
            <div className={styles.productInfo}>
              <h2>R${selectedProduct.price}</h2>
              <p className={styles.title}>{selectedProduct.title}</p>
              <button className={styles.btn}>Compre</button>
            </div>
          </div>
        )}
        <p className={styles.line}></p>
      <div className={styles.container}>
        <div className={styles.gallery} ref={galleryRef}>
          {list.map((e) => (
            <div
              key={e.id}
              className={styles.galleryItem}
              onClick={() => handleProductClick(e.id)}
            >
              <Image src={e.thumbnail} alt={e.title} width={80} height={50} />
              <p className={styles.price}>R${e.price}</p>
            </div>
          ))}
        </div>
        <div className={styles.prev} onClick={handlePrev}></div>
        <div className={styles.next} onClick={handleNext}></div>
      </div>
      <MainProduct />
    </section>
  );
}




