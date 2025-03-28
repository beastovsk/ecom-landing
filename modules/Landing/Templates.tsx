'use client';

import {GiftIcon, MapIcon, MedalIcon, PlaneIcon} from './Icons';
import Image from 'next/image';
import {OrderModal} from './OrderModal';
import {PreviewTemplate} from './PreviewTemplate';

const templates = [
  {
    image: '/image/product-1.png',
    design:
      'https://www.figma.com/design/cnxoQxzeE0tVtdlPrxz3PK/%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD-1?node-id=0-1&t=I2TISldFZCh3Tcpq-1'
  },
  {
    image: '/image/product-2.png',
    design:
      'https://www.figma.com/design/bPq8rHe8YzOKTy8ebAEXBf/%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD-2?node-id=0-1&t=1zHEe9YuHhfQGRDn-1'
  }
];

export const Templates = () => {
  return (
    <section id='howItWorks' className='container text-center py-24 sm:py-32'>
      <h2 className='text-3xl md:text-4xl font-bold'>
        Выбери свой{' '}
        <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>дизайн</span>
      </h2>
      <p className='md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground'>Какой вам подходит больше?</p>

      <div className='flex justify-between sm:gap-5 flex-col sm:flex-row'>
        {templates.map((item, index) => (
          <div key={index} className='relative flex-grow w-full group cursor-pointer'>
            <Image
              className='w-full h-full rounded-xl transition-opacity group-hover:opacity-70'
              src={item.image}
              alt='Шаблон интернет-магазина'
              width={300}
              height={300}
            />

            <PreviewTemplate url={item.design} />
          </div>
        ))}
      </div>

      <div className='container text-center py-10 sm:py-7 flex flex-col items-center'>
        <h1>Понравился макет? Заказывай уже сейчас.</h1>
        <div className='w-max mt-5'>
          <OrderModal pricing={{buttonText: 'Заказать'}} />
        </div>
      </div>
    </section>
  );
};
