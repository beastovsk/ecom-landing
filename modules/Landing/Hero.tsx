'use client';

import {Button, buttonVariants} from '@/components/ui/button';
import {HeroCards} from './HeroCards';
import {ArrowDown} from 'lucide-react';

import Link from 'next/link';
import {getCookie} from 'cookies-next';
import {PurchaseRequestForm} from './PurchaseRequestForm';
import {OrderModal} from './OrderModal';

export const Hero = () => {
  return (
    <section className='container flex flex-col items-center py-24 md:py-36 space-y-10 text-center'>
      {/* Main Title Section */}
      <div className='max-w-3xl space-y-6'>
        <h1 className='text-5xl md:text-6xl font-bold'>
          Готовый интернет-магазин для малого бизнеса за{' '}
          <span className='inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text'>
            неделю
          </span>{' '}
        </h1>

        <p className='text-xl text-muted-foreground md:w-9/12 mx-auto'>
          Современный дизайн, удобное управление сайтом, качественное SEO. Запускаем под ключ!
        </p>
      </div>

      {/* Call to Action Buttons */}
      <div className='flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4'>
        {/* <Link href='#purchase-request'>
          <Button className='w-full md:w-auto px-8 py-4'>Связаться</Button>
        </Link> */}
        <OrderModal pricing={{buttonText: 'Бесплатная консультация'}} />
        <a
          rel='noreferrer noopener'
          href='#features'
          className={`w-full md:w-auto px-8 py-4 ${buttonVariants({
            variant: 'outline'
          })}`}
        >
          Узнать больше
          <ArrowDown className='ml-2 w-5 h-5' />
        </a>
      </div>
    </section>
  );
};
