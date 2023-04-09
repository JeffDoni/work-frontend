import { useContext } from "react";
import ProductContext from '../context/ProductContext';
import Image from "next/image";

export default function MainProduct() {
    const { list } = useContext(ProductContext);
    console.log(list[0])
  return (
    <div className="main-product">
    <Image src={list[8].thumbnail} alt={list[8].title} width={400} height={400} />
     <p>{list[8].price}</p>
    </div>
  );
}