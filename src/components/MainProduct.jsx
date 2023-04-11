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

  <div className={styles.primaryProduct}>
    <div className={styles.detailsProduct}>
    <Image src={list[ramdomNumber].thumbnail} alt={list[ramdomNumber].title} width={100} height={100} />
    <div>
     <h3>R${list[ramdomNumber].price}</h3>
     <p>{list[ramdomNumber].title}</p>
    </div>
     </div>
     <button className={styles.btnNow}>COMPRE AGORA</button>
     </div>

     <p className={styles.lineproduct}></p>

     <div className={styles.primaryProduct}>
     <div className={styles.detailsProduct}>
     <Image src={list[ramdomNumber2].thumbnail} alt={list[ramdomNumber2].title} width={100} height={100} />
      <div>
     <h3>{list[ramdomNumber2].title}</h3>
     <p className={styles.price}>R${list[ramdomNumber2].price}</p>
     <p><a href={list[ramdomNumber2].permalink} target="_blanck">Clique aqui</a> para mais detalhes do produto</p>
     </div>
     </div>
     </div>
     </section>
     )
}
    </div>
  );
}