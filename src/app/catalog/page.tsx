import { ShapesIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge"
import { prismaClient } from "@/lib/prisma";
import CategoryItem from "./components/category-item";
const CatalogPage = async () => {
  const categories = await prismaClient.category.findMany({})

  return (
    <div className="p-5 gap-8 flex flex-col">
      <Badge className="w-fit gap-1 px-3 py-[0.375rem] border-2 text-base uppercase border-primary" variant="outline"
      >
        <ShapesIcon size={16} />
        Catálogo
      </Badge>
      <div className="gap-8 grid grid-cols-2">
        {categories.map(category => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

export default CatalogPage;