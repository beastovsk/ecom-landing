import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import {Monitor, Settings, BarChart} from 'lucide-react'; // Importing icons from Lucide

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <Monitor className='w-10 h-10 text-primary' />,
    title: 'Адаптивный дизайн',
    description:
      'Ваш интернет-магазин будет прекрасно выглядеть и работать на любом устройстве, будь то компьютер, планшет или смартфон.'
  },
  {
    icon: <Settings className='w-10 h-10 text-primary' />,
    title: 'Интуитивно понятный интерфейс',
    description: 'Удобная админ панель позволяет легко управлять вашим магазином без специальных знаний.'
  },
  {
    icon: <BarChart className='w-10 h-10 text-primary' />,
    title: 'Аналитика на базе ИИ',
    description:
      'Получайте полезные инсайты и рекомендации для оптимизации вашего бизнеса с помощью встроенной аналитики.'
  }
];

const featureList: string[] = [
  'Адаптивный дизайн',
  'Удобное управление товарами',
  'Интеграция с платежными системами',
  'SEO-оптимизация',
  'Поддержка нескольких языков',
  'Гибкие настройки доставки',
  'Постоянные обновления',
  'Быстрая и безопасная работа',
  'Круглосуточная поддержка',
  'Полная кастомизация',
  'Встроенные маркетинговые инструменты'
];

export const Features = () => {
  return (
    <section id='features' className='container py-24 sm:py-32 space-y-8'>
      <h2 className='text-3xl lg:text-4xl font-bold md:text-center'>
        Основные{' '}
        <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>возможности</span>{' '}
        наших интернет-магазинов
      </h2>

      <div className='flex flex-wrap md:justify-center gap-4'>
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant='secondary' className='text-sm'>
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {features.map(({icon, title, description}: FeatureProps) => (
          <Card key={title} className='bg-muted/50'>
            <CardHeader>
              <CardTitle className='flex items-center gap-4'>
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
