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
                Мы предлагаем готовые интернет-магазины с удобной админ панелью для управления вашим бизнесом. Наши
                решения позволяют вам сосредоточиться на продажах, а не на технической стороне. Легко добавляйте товары,
                управляйте заказами и анализируйте данные, чтобы развивать свой бизнес.
              </p>
            </div>
            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
