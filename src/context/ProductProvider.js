import ProductContext from "./ProductContext";
import { getCategories, getProductsFromCategoryAndQuery } from "@/services/services";
import { useMemo, useState, useEffect } from "react";


export default function ProductProvider ({ children }) {
    const [categories, setCategories] = useState([]);
    const [list, setList] = useState([]);
    const [selectId, setSelectId] = useState('MLB5672');

    useEffect(() => {
      getCategories().then((data) => setCategories(data));
      getProductsFromCategoryAndQuery(selectId).then((data) => setList(data.results));
    }, []);

    const context = useMemo(() => ({ categories, setCategories, list, setList, setSelectId, selectId }), [categories, setCategories, list, selectId, setList, setSelectId]);
  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
}