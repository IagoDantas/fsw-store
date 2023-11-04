import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDownIcon } from "lucide-react";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex max-w-[170px] flex-col gap-4">
      <div className="relative bg-accent rounded-lg h-[170px] w-[170px] flex items-center justify-center">
        <Image
          src={product.imageUrls[0]}
          height={0}
          width={0}
          sizes="100vw"
          alt={product.name}
          className="h-auto w-auto max-w-[80%] max-h-[70%]"
          style={{
            objectFit: "contain",
          }}
        />
        {product.discountPercent > 0 && (
          <Badge className="absolute left-3 top-3 px-2 py-[2px]">
            <ArrowDownIcon size={14} /> {product.discountPercent}%
          </Badge>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-sm overflow-hidden whitespace-nowrap text-ellipsis">{product.name}</p>

        <div className="flex items-center gap-2 text-sm overflow-hidden whitespace-nowrap text-ellipsis">
          {product.discountPercent > 0 ? (
            <>
              <p className="font-semibold">R$ {product.totalPrice.toFixed(2)}</p>

              <p className="line-through opacity-75 text-xs">R$ {Number(product.basePrice.toFixed(2))}</p>
            </>
          ) : (

            <p className="line-through opacity-75 text-xs">R$ {Number(product.basePrice.toFixed(2))}</p>
          )
          }


        </div>
      </div>
    </div>
  );
}

export default ProductItem;