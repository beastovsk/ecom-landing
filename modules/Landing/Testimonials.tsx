import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';

interface TestimonialProps {
  image: string;
  name: string;
  niche: string;
  comment: string;
}
const testimonials: TestimonialProps[] = [
  {
    image: '/image/photo-1.png',
    name: 'Алексей М.',
    niche: 'Одежда и обувь',
    comment:
      'Магазин настроили очень быстро, а админка проста и интуитивно понятна. Работает без сбоев, рекомендую всем!'
  },
  {
    image: '/image/photo-2.png',
    name: 'Светлана Г.',
    niche: 'Косметика и уход',
    comment:
      'Запуск магазина занял всего неделю. Сайт идеально подходит для малого бизнеса, и панель управления легка в освоении.'
  },
  {
    image: '/image/photo-3.png',
    name: 'Максим И.',
    niche: 'Спортивные товары',
    comment:
      'Очень доволен результатом! Сайт работает быстро, а возможность управлять им через удобную админку - большое преимущество.'
  },
  {
    image: '/image/photo-x.png',
    name: 'Наталья В.',
    niche: 'Детские товары',
    comment:
      'Мой магазин был запущен за неделю, а функционал очень удобен. Сайт быстро загружается и выглядит современно.'
  },
  {
    image: '/image/photo-4.png',
    name: 'Дмитрий К.',
    niche: 'Электроника и гаджеты',
    comment:
      'Не ожидал, что процесс займет так мало времени. Работать с сайтом просто, а админка отлично настроена с первого дня.'
  },
  {
    image: '/image/photo-x.png',
    name: 'Ольга С.',
    niche: 'Украшения и аксессуары',
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
        {testimonials.map(({image, name, niche, comment}: TestimonialProps, i) => (
          <Card key={name} className='max-w-md md:break-inside-avoid overflow-hidden'>
            <CardHeader className='flex flex-row items-center gap-4 pb-2'>
              <Avatar>
                <AvatarImage alt='' src={image} />
                <AvatarFallback>{name[0]}</AvatarFallback>
              </Avatar>

              <div className='flex flex-col'>
                <CardTitle className='text-lg'>{name}</CardTitle>
                <CardDescription>{niche}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>{comment}</CardContent>
            <div className={i === 2 || i === 3 ? 'py-3' : null}></div>
          </Card>
        ))}
      </div>
      <Card className='flex flex-col md:flex-row items-center p-4 gap-4 w-max mt-10 mx-auto'>
        {/* Видео */}
        <div className='w-40 md:w-48 lg:w-56'>
          <video controls className='w-full rounded-xl shadow-lg'>
            <source src='/video/review.mp4' type='video/mp4' />
            Ваш браузер не поддерживает видео.
          </video>
        </div>

        {/* Цитата */}
        <CardContent className='flex-1 text-center md:text-left'>
          <CardTitle className='text-lg'>Данил Костенко</CardTitle>
          <CardDescription>Летняя обувь</CardDescription>
          <blockquote className='text-lg font-semibold italic mt-5'>
            "Легко настроил оплату, админка удобная, <br />быстро добавил товар, настроил рекламу"
          </blockquote>
        </CardContent>
      </Card>
    </section>
  );
};
