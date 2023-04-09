import Header from "@/components/Header";
import Main from "@/components/Main";
import ProductProvider from "@/context/ProductProvider";
import Head from "next/head";



export default function Home() {
  return (
    <ProductProvider>
    <Head>
      <title>My Products</title>
    </Head>
     <Header/>
     <Main/>
    </ProductProvider>
  )
}
