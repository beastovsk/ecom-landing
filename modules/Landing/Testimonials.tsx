import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';

interface TestimonialProps {
  image: string;
  name: string;
  comment: string;
}
const testimonials: TestimonialProps[] = [
  {
    image: 'https://github.com/shadcn.png',
    name: 'Алексей М.',
    comment:
      'Магазин настроили очень быстро, а админка просто и интуитивно понятна. Работает без сбоев, рекомендую всем!'
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'Светлана Г.',
    comment:
      'Запуск магазина занял всего неделю. Сайт идеально подходит для малого бизнеса, и панель управления легка в освоении.'
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'Максим И.',
    comment:
      'Очень доволен результатом! Сайт работает быстро, а возможность управлять им через удобную админку - большое преимущество.'
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'Наталья В.',
    comment:
      'Мой магазин был запущен за неделю, а функционал очень удобен. Сайт быстро загружается и выглядит современно.'
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'Дмитрий К.',
    comment:
      'Не ожидал, что процесс займет так мало времени. Работать с сайтом просто, а админка отлично настроена с первого дня.'
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'Ольга С.',
    comment:
      'Приятно удивлена качеством работы! Всё быстро настроили, и уже через неделю интернет-магазин был готов к запуску.'
  }
];

export const Testimonials = () => {
  return (
    <section id='testimonials' className='container py-24 sm:py-32'>
      <h2 className='text-3xl md:text-4xl font-bold'>
        Почему
        <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
          {' '}
          предприниматели{' '}
        </span>
        выбирают наши магазины
      </h2>

      <p className='text-xl text-muted-foreground pt-4 pb-8'>
        Благодарим каждого клиента за доверие и ценные отзывы – ваш успех вдохновляет нас!{' '}
      </p>

      <div className='grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6'>
        {testimonials.map(({image, name, comment}: TestimonialProps, i) => (
          <Card key={name} className='max-w-md md:break-inside-avoid overflow-hidden'>
            <CardHeader className='flex flex-row items-center gap-4 pb-2'>
              <Avatar>
                <AvatarImage alt='' />
                <AvatarFallback>{name[0]}</AvatarFallback>
              </Avatar>

              <div className='flex flex-col'>
                <CardTitle className='text-lg'>{name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>{comment}</CardContent>
            <div className={i === 2 || i === 3 ? 'py-3' : null}></div>
          </Card>
        ))}
      </div>
    </section>
  );
};
