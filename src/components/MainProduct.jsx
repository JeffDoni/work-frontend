import { useContext } from "react";
import ProductContext from '../context/ProductContext';
import Image from "next/image";
import styles from '../styles/MainProduct.module.css';

export default function MainProduct() {
    const { list } = useContext(ProductContext);
    const ramdomNumber = Math.floor(Math.random() * list.length);
    const ramdomNumber2 = Math.floor(Math.random() * 20);
  return (
    <div className={styles.mainproduct}>
        { list.length > 0 &&
  (  <section className={styles.exposeProduct}>
  <div>
    <Image src={list[ramdomNumber].thumbnail} alt={list[ramdomNumber].title} width={100} height={100} />
     <p>{list[ramdomNumber].price}</p>
     <p>{list[ramdomNumber].title}</p>
     <button>Buy Now</button>
     </div>
     <p className={styles.lineproduct}></p>
     <div>
     <Image src={list[ramdomNumber2].thumbnail} alt={list[ramdomNumber2].title} width={100} height={100} />
     <p>{list[ramdomNumber2].price}</p>
     <p>{list[ramdomNumber2].title}</p>
     <button>Buy Now</button>
     </div>
     </section>
     )
}
    </div>
  );
}