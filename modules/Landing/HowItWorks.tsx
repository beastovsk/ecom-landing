import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {GiftIcon, MapIcon, MedalIcon, PlaneIcon} from './Icons';

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: 'Выбор магазина',
    description: 'Изучите наши готовые решения и выберите интернет-магазин, который соответствует вашим требованиям.'
  },
  {
    icon: <MapIcon />,
    title: 'Оформление покупки',
    description: 'Заполните форму с вашими контактными данными и выберите удобный способ оплаты.'
  },
  {
    icon: <PlaneIcon />,
    title: 'Настройка магазина',
    description: 'Получите доступ к админ панели, настройте свой магазин и добавьте товары.'
  },
  {
    icon: <GiftIcon />,
    title: 'Запуск и поддержка',
    description: 'Запускайте магазин и начните продажи. Мы всегда готовы помочь с поддержкой и настройками.'
  }
];

export const HowItWorks = () => {
  return (
    <section id='howItWorks' className='container text-center py-24 sm:py-32'>
      <h2 className='text-3xl md:text-4xl font-bold'>
        Как это{' '}
        <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>Работает, </span>
        Пошаговое руководство
      </h2>
      <p className='md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground'>
        Узнайте, как легко начать свой онлайн-бизнес с нашими готовыми интернет-магазинами
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {features.map(({icon, title, description}: FeatureProps) => (
          <Card key={title} className='bg-muted/50'>
            <CardHeader>
              <CardTitle className='grid gap-4 place-items-center'>
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
