import Image from "next/image"
import Categories from "./components/categories"
import { prismaClient } from "@/lib/prisma"
import ProductItem from "@/components/ui/product-item"
import ProductList from "./components/product-list"

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercent: {
        gt: 0,
      }
    }
  })

  return (
    <div className="">
      <Image
        src="/banner-home-01.png"
        height={0}
        width={0}
        alt="Até 55% de desconto esse mês!"
        className="h-auto w-full px-5"
        sizes="100vw"
      />
      <div className="mt-8 px-5">
        <Categories />

      </div>

      <div className="mt-8">
        <p className="pl-5 font-bold  uppercase mb-5">Ofertas</p>
        <ProductList products={deals} />
      </div>
      <Image
        src="/banner-home-02.png"
        height={0}
        width={0}
        alt="Até 55% de desconto em mouses"
        className="h-auto w-full px-5"
        sizes="100vw"
      />
    </div>
  )
}
