'use client';

import {Button} from '@/components/ui/button';
import Link from 'next/link';

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
            Напиши мне в телеграм и мы проведем встречу, где я отвечу на все твои вопросы и предложу лучшее решение
          </p>
        </div>

        <div className='space-y-4 lg:col-start-2'>
          <Link href='https://t.me/beastovsk' target='_blank'>
            <Button className='w-full md:mr-4 md:w-auto'>Открыть личные сообщения</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
