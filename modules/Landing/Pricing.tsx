import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
import {Check} from 'lucide-react';
import Link from 'next/link';

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
      'Админ панель для управления',
      'Базовая поддержка',
      'Заказы через личный кабинет'
    ]
  },
  {
    title: 'Премиум пакет',
    popular: PopularPlanType.YES,
    price: '₽ 50.000,00',
    description: 'Готовый интернет-магазин с интеграцией онлайн оплат (карты, СберПэй, криптовалюта).',
    buttonText: 'Заказать',
    benefitList: [
      'Готовый интернет-магазин',
      'Админ панель для управления',
      'Интеграция онлайн оплат',
      'Полная поддержка и обслуживание'
    ]
  },
  {
    title: 'Доработка магазина',
    popular: PopularPlanType.NO,
    price: 'По запросу',
    description: 'Мы свяжемся с вами, рассчитаем смету и выполним доработку интернет-магазина.',
    buttonText: 'Уточнить стоимость',
    benefitList: ['Индивидуальная доработка', 'Расчет сметы', 'Выполнение работы по вашему запросу']
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
                ) : null}
              </CardTitle>
              <div>
                <span className='text-3xl font-bold'>{pricing.price}</span>
                <span className='text-muted-foreground'> /услуга</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Link href='/register'>
                <Button className='w-full'>{pricing.buttonText}</Button>
              </Link>
            </CardContent>

            <hr className='w-4/5 m-auto mb-4' />

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
    </section>
  );
};
