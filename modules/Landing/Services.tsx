import {Card, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import cubeLeg from '@/src/assets/cube-leg.png';
import Image from 'next/image';
import {ShoppingCart, Shield, DollarSign} from 'lucide-react'; // Importing icons from Lucide

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: 'Полный комплект',
    description:
      'Мы предоставляем готовый интернет-магазин с админ панелью, что позволяет вам сразу начать продажи без необходимости разрабатывать сайт с нуля.',
    icon: <ShoppingCart className='w-8 h-8 text-primary' />
  },
  {
    title: 'Безопасность',
    description:
      'Наши магазины обеспечивают высокую безопасность данных и транзакций, что защищает вас и ваших клиентов.',
    icon: <Shield className='w-8 h-8 text-primary' />
  },
  {
    title: 'Финансовая выгода',
    description:
      'Получите готовый к продаже магазин с возможностью быстрого запуска и высокой доходностью, что обеспечивает отличное соотношение цены и качества.',
    icon: <DollarSign className='w-8 h-8 text-primary' />
  }
];

export const Services = () => {
  return (
    <section className='container py-24 sm:py-32'>
      <div className='grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center'>
        <div>
          <h2 className='text-3xl md:text-4xl font-bold'>
            Как{' '}
            <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'> работает</span>{' '}
            покупка нашего магазина?
          </h2>

          <p className='text-muted-foreground text-xl mt-4 mb-8'>
            Мы предлагаем простой и эффективный способ начать свой бизнес в интернете
          </p>

          <div className='flex flex-col gap-8'>
            {serviceList.map(({icon, title, description}: ServiceProps) => (
              <Card key={title}>
                <CardHeader className='space-y-1 flex md:flex-row justify-start items-start gap-4'>
                  <div className='mt-1 bg-primary/20 p-1 rounded-2xl'>{icon}</div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className='text-md mt-2'>{description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <Image src={cubeLeg} className='w-[300px] md:w-[500px] lg:w-[600px] object-contain' alt='About services' />
      </div>
    </section>
  );
};
