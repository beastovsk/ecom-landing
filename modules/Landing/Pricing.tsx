'use client';

import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
import {Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {useToast} from '@/components/ui/use-toast';
import {Check} from 'lucide-react';
import {useState} from 'react';
import {Textarea} from '@/components/ui/textarea';
import {OrderModal} from './OrderModal';
import Image from 'next/image';

enum PopularPlanType {
  NO = 0,
  YES = 1
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: string;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: 'Стандартный пакет',
    popular: PopularPlanType.NO,
    price: '₽ 30.000,00',
    description: 'Готовый интернет-магазин. Заказы через личный кабинет.',
    buttonText: 'Заказать',
    benefitList: [
      'Готовый интернет-магазин',
      'Админ панель для управления товарами',
      'Обработка заказов через личный кабинет'
    ]
  },
  {
    title: 'Премиум пакет',
    popular: PopularPlanType.YES,
    price: '₽ 50.000,00',
    description: 'Готовый интернет-магазин. Оплата на сайте.',
    buttonText: 'Заказать',
    benefitList: [
      'Все из стандартного пакета',
      'Интеграция с онлайн-оплатами: карты, СберПэй, криптовалюта',
      'Управление заказами через личный кабинет'
    ]
  },
  {
    title: 'Индивидуальная доработка',
    popular: PopularPlanType.NO,
    price: 'По запросу',
    description: 'Мы свяжемся с вами, рассчитаем функционал и выполним доработку интернет-магазина.',
    buttonText: 'Уточнить стоимость',
    benefitList: ['Разработка уникальных функций и доработок для вашего магазина', 'Смета на основе ваших требований']
  }
];

export const Pricing = () => {
  return (
    <section id='pricing' className='container py-24 sm:py-32'>
      <h2 className='text-3xl md:text-4xl font-bold text-center'>
        Постоянная
        <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
          {' '}
          фиксированная{' '}
        </span>
        цена
      </h2>
      <h3 className='text-xl text-center text-muted-foreground pt-4 pb-8'>
        Мы предлагаем несколько пакетов для вашего интернет-магазина по фиксированным ценам, а также услуги по
        доработке.
      </h3>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? 'drop-shadow-xl shadow-black/10 dark:shadow-white/10 flex flex-col'
                : 'flex flex-col'
            }
          >
            <CardHeader>
              <CardTitle className='flex items-center justify-between'>
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge variant='secondary' className='text-sm text-primary'>
                    Популярное
                  </Badge>
                ) : (
                  <Badge variant='outline' className='text-sm text-primary'>
                    Классика
                  </Badge>
                )}
              </CardTitle>
              <div>
                <span className='text-3xl font-bold'>{pricing.price}</span>
                <span className='text-muted-foreground'> /товар</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <OrderModal pricing={pricing} />
            </CardContent>

            <hr className='w-4/5 mx-auto mb-4' />

            <CardFooter className='flex'>
              <div className='space-y-4'>
                {pricing.benefitList.map((benefit: string) => (
                  <span key={benefit} className='flex'>
                    <Check className='text-green-500' /> <h3 className='ml-2'>{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className='container py-24 sm:py-32'>
        <h2 className='text-3xl md:text-4xl font-bold text-center'>
          Почему стоит выбрать{' '}
          <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>наши пакеты</span>
          ?{' '}
        </h2>
        <div className='mt-5 flex flex-col gap-5'>
          <div className='flex gap-5 items-center'>
            <Image src='/image/true.png' alt='true' width={30} height={30} />
            <div>
              <h2 className='text-xl sm:text-2xl font-bold'>Готовность к запуску</h2>
              <p className='text-xl text-gray-400'>
                Мы обеспечиваем полную настройку вашего магазина в короткие сроки.
              </p>
            </div>
          </div>
          <div className='flex gap-5 items-center'>
            <Image src='/image/true.png' alt='true' width={30} height={30} />
            <div>
              <h2 className='text-xl sm:text-2xl font-bold'>Удобство</h2>
              <p className='text-xl text-gray-400'>
                Интуитивно понятная админ панель и поддержка популярных платежных систем.{' '}
              </p>
            </div>
          </div>
          <div className='flex gap-5 items-center'>
            <Image src='/image/true.png' alt='true' width={30} height={30} />
            <div>
              <h2 className='text-xl sm:text-2xl font-bold'>Быстрая настройка</h2>
              <p className='text-xl text-gray-400'>Вы получите свой магазин в рабочем виде, готовый к продажам.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
