'use client';

import {useState} from 'react';
import {NavigationMenu, NavigationMenuItem, NavigationMenuList} from '@/components/ui/navigation-menu';
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from '@/components/ui/sheet';
import {buttonVariants} from '@/components/ui/button';
import {ArrowRight, Menu, Store} from 'lucide-react';
import Link from 'next/link';

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: '/',
    label: 'Главная'
  },
  {
    href: '/blog',
    label: 'Блог'
  }
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className='sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background'>
      <NavigationMenu className='mx-auto'>
        <NavigationMenuList className='container h-14 px-4 w-screen flex justify-between '>
          <NavigationMenuItem className='font-bold flex'>
            <Link rel='noreferrer noopener' href='/' className='ml-2 font-bold text-xl flex items-center'>
              <Store className='mr-2' />
              Ecom Store
            </Link>
          </NavigationMenuItem>

          {/* Mobile Navigation */}
          <span className='flex md:hidden'>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className='px-2'>
                <Menu className='flex md:hidden h-5 w-5' />
              </SheetTrigger>

              <SheetContent side={'left'}>
                <SheetHeader>
                  <SheetTitle className='font-bold text-xl'>Ecom Store</SheetTitle>
                </SheetHeader>
                <nav className='flex flex-col justify-center items-center gap-2 mt-4'>
                  {routeList.map(({href, label}: RouteProps) => (
                    <Link
                      rel='noreferrer noopener'
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({variant: 'ghost'})}
                    >
                      {label}
                    </Link>
                  ))}
                  <Link
                    rel='noreferrer noopener'
                    href='https://t.me/beastovsk'
                    target='_blank'
                    className={`w-[110px] border ${buttonVariants({
                      variant: 'secondary'
                    })}`}
                  >
                    Поддержка <ArrowRight className='ml-2 w-5 h-5' />
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex gap-2'>
            {routeList.map(({href, label}: RouteProps) => (
              <Link
                rel='noreferrer noopener'
                href={href}
                key={href}
                className={`text-[17px] ${buttonVariants({
                  variant: 'ghost'
                })}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className='hidden md:flex gap-2'>
            <Link
              rel='noreferrer noopener'
              href='https://t.me/beastovsk'
              target='_blank'
              className={`border ${buttonVariants({variant: 'secondary'})}`}
            >
              Поддержка <ArrowRight className='ml-2 w-5 h-5' />
            </Link>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
