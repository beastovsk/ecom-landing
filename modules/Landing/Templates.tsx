'use client';

import {GiftIcon, MapIcon, MedalIcon, PlaneIcon} from './Icons';
import Image from 'next/image';
import {OrderModal} from './OrderModal';
import {PreviewTemplate} from './PreviewTemplate';

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: 'Выбор шаблона',
    description: 'Найдите магазин, который понравится вашим клиентам'
  },
  {
    icon: <MapIcon />,
    title: 'Свяжитесь с нами',
    description:
      'Заполните форму, на встрече мы разберемся как максимально быстро и выгодно для Вас запустить Ваш магазин.'
  },
  {
    icon: <PlaneIcon />,
    title: 'Настройка магазина',
    description:
      'Мы выдадим вам доступы от вашей админ-панели, где вы можете настроить все для лучшей работы Вашего магазина'
  },
  {
    icon: <GiftIcon />,
    title: 'Запуск и поддержка',
    description: 'Запускайте рекламу уже спустя пару дней. Мы всегда готовы помочь с поддержкой и настройкой.'
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

      <div className='flex justify-between gap-5'>
        {['/image/product-1.png', '/image/product-2.png'].map((src, index) => (
          <div key={index} className='relative flex-grow w-full group cursor-pointer'>
            <Image
              className='w-full h-full rounded-xl transition-opacity group-hover:opacity-70'
              src={src}
              alt='Шаблон интернет-магазина'
              width={300}
              height={300}
            />

            <PreviewTemplate
              url={'https://www.figma.com/design/cnxoQxzeE0tVtdlPrxz3PK/Untitled?node-id=0-1&p=f&t=qjCsGLmT2MCHB13I-0'}
            />
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
