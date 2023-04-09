import ProductContext from "@/context/ProductContext";
import { useContext } from "react";
import { getProductsFromCategoryAndQuery } from "@/services/services";


export default function Aside() {
  const { categories, setSelectId, setList} = useContext(ProductContext);
  const handleChange = async ({ target: { value } }) => {
    setSelectId(value);
    try {
      const product = await getProductsFromCategoryAndQuery(value, '');
      setList(product.results);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };
  
  return (
    <aside>
      <h1>Categories</h1>
     {categories.map((category) => (
        <button
         key={category.id} 
         className="btn-category"
         value={category.id}
         name="categories"
        onClick={handleChange}>- {category.name}</button>
     ))}
    </aside>
  );
}