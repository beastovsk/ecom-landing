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
    title: 'Оставьте заявку',
    description: 'Расскажите о своем бизнесе – мы предложим лучшее решение для вас.'
  },
  {
    icon: <MapIcon />,
    title: 'Получите доступ',
    description:
      'Выдаем логин и пароль к админке – магазин уже готов к работе.'
  },
  {
    icon: <PlaneIcon />,
    title: 'Настройте под себя',
    description:
      'Добавьте товары, установите цены, настройте доставку и оплату.'
  },
  {
    icon: <GiftIcon />,
    title: 'Запускайте продажи',
    description: 'Начинайте рекламироваться и зарабатывать – мы всегда на связи для поддержки.'
  }
];

export const HowItWorks = () => {
  return (
    <section id='howItWorks' className='container text-center py-24 sm:py-32'>
      <h2 className='text-3xl md:text-4xl font-bold'>
        Как это{' '}
        <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>Работает</span>?
      </h2>
      <p className='md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground'>
        Запустите интернет-магазин без лишних сложностей{' '}
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
