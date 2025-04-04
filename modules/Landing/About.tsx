import {Statistics} from './Statistics';
import pilot from '@/src/assets/growth.png';
import PreloaderImage from '@/components/PreloaderImage/PreloaderImage';

export const About = () => {
  return (
    <section id='about' className='container py-24 sm:py-32'>
      <div className='bg-muted/50 border rounded-lg py-12'>
        <div className='px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12'>
          <PreloaderImage src={pilot} alt='' className='w-[300px] object-contain rounded-lg' />
          <div className='bg-green-0 flex flex-col justify-between'>
            <div className='pb-6'>
              <h2 className='text-3xl md:text-4xl font-bold'>
                <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
                  О наших{' '}
                </span>
                интернет-магазинах
              </h2>
              <p className='text-xl text-muted-foreground mt-4'>
                Мы создаем магазины, с которыми малый бизнес быстро выходит в онлайн и начинает зарабатывать. <br />
                Без сложностей: просто добавляйте товары, обрабатывайте заказы и развивайте свой бизнес.
              </p>
            </div>
            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
