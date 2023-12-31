import Image from "next/image"
import Categories from "./components/categories"
import { prismaClient } from "@/lib/prisma"
import ProductItem from "@/components/ui/product-item"
import ProductList from "./components/product-list"
import SectionTitle from "./components/section-title"
import PromoBanner from "./components/promo-banner"

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercent: {
        gt: 0,
      },
      NOT: {
        slug: 'logitech-mx-keys-mini'
      }
    }
  })

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'keyboards',
      },
      NOT: {
        slug: 'logitech-mx-keys-mini'
      }
    }
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'mouses',
      },
    }
  });

  return (
    <div className="flex flex-col gap-8 py-8">
      <PromoBanner
        src="/banner-home-01.png"
        alt="Até 55% de desconto esse mes"
      />
      <div className=" px-5">
        <Categories />

      </div>

      <div>
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>
      <PromoBanner
        src="/banner-home-02.png"
        alt="Até 55% de desconto em mouses"
      />
      <div>
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>

      <div>
        <PromoBanner
          src="/banner-home-03.png"
          alt="Até 55% de desconto em mouses"
        />
      </div>
      <div>
        <SectionTitle>Mouses</SectionTitle>
        <ProductList products={mouses} />
      </div>
    </div>
  )
}
