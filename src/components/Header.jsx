import { ImMenu } from 'react-icons/im'
import ProductContext from '@/context/ProductContext';
import { useContext, useEffect } from 'react';

export default function Header() {
  const { showMenu, setShowMenu, setShowCategory, showCategory} = useContext(ProductContext)

  useEffect(()=> {
    window.innerWidth <= 600 && setShowMenu(!showMenu)
  }, [])

  return (
    <header>
      <h1>My Products</h1>
      <div onClick={()=>setShowCategory(!showCategory)}>{showMenu && <ImMenu/>}</div>
    </header>
  );
}