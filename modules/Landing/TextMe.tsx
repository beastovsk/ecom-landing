'use client';

import {Button} from '@/components/ui/button';
import Link from 'next/link';
import {OrderModal} from './OrderModal';

export const TextMe = () => {
  return (
    <section id='cta' className='bg-muted/50 py-16 my-24 sm:my-32'>
      <div className='container lg:grid lg:grid-cols-2 place-items-center'>
        <div className='lg:col-start-1'>
          <h2 className='text-3xl md:text-4xl font-bold '>
            Хочешь узнать подойдет ли
            <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
              {' '}
              лично для твоей ниши ?
            </span>
          </h2>
          <p className='text-muted-foreground text-xl mt-4 mb-8 lg:mb-0'>
            Заполни форму, и я свяжусь с тобой для подробной консультации и предложу решение, подходящее для твоего
            бизнеса.{' '}
          </p>
        </div>

        <div className='space-y-4 lg:col-start-2'>
          <OrderModal pricing={{buttonText: 'Заполнить форму'}} />
        </div>
      </div>
    </section>
  );
};
