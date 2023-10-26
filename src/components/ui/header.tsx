import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'; Sheet
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet';

import { Home, ListOrderedIcon, LogInIcon, MenuIcon, PercentCircleIcon, PercentIcon, ShoppingCartIcon } from 'lucide-react';

const Header = () => {
  return (
    <Card className='flex items-center justify-between p-[1.875rem]'>
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button >
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          <div className="mt-2 flex gap-4 flex-col">
            <Button variant="outline" className='w-full justify-start gap-2'>
              <LogInIcon size={16} />
              Fazer login
            </Button>
            <Button variant="outline" className='w-full justify-start gap-2'>
              <Home size={16} />
              Início
            </Button>
            <Button variant="outline" className='w-full justify-start gap-2'>
              <PercentIcon size={16} />
              Ofertas
            </Button>
            <Button variant="outline" className='w-full justify-start gap-2'>
              <ListOrderedIcon size={16} />
              Catálogo
            </Button>

          </div>

        </SheetContent>
      </Sheet>

      <h1 className='font-semibold text-lg'><span className='text-primary'>FSW</span> Store</h1>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>

    </Card >
  );
}

export default Header;