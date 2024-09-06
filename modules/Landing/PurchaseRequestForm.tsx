'use client';

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea'; // Assuming you have a Textarea component
import {useToast} from '@/components/ui/use-toast';

export const PurchaseRequestForm = () => {
  const {toast} = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setFormData((prevState) => ({...prevState, [name]: value}));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const TELEGRAM_API_TOKEN = '7319980228:AAGYT0fdIfxgJrLBYbp8XkX4oDP-UbBjoSM';
    const CHAT_ID = '1069385289';
    const message = `Новая заявка на приобретение магазина:\nИмя: ${formData.name}\nТелефон: ${formData.phone}\nСообщение: ${formData.message}`;

    try {
      await fetch(`https://api.telegram.org/bot${TELEGRAM_API_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message
        })
      });

      toast({
        title: 'Заявка отправлена!',
        description: 'Мы свяжемся с вами в ближайшее время.'
      });

      setFormData({name: '', phone: '', message: ''});
    } catch (error) {
      toast({
        title: 'Ошибка отправки',
        description: 'Пожалуйста, попробуйте снова.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='purchase-request'>
      <hr className='w-11/12 mx-auto' />

      <div className='container py-24 sm:py-32'>
        <h3 className='text-center text-4xl md:text-5xl font-bold'>
          Оставьте заявку на{' '}
          <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
            покупку магазина
          </span>
        </h3>
        <p className='text-xl text-muted-foreground text-center mt-4 mb-8'>
          Заполните форму, и мы свяжемся с вами для уточнения деталей.
        </p>

        <form onSubmit={handleSubmit} className='flex flex-col w-full md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2'>
          <Input
            placeholder='Ваше имя'
            className='bg-muted/50 dark:bg-muted/80'
            aria-label='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            placeholder='Ваш номер телефона'
            className='bg-muted/50 dark:bg-muted/80'
            aria-label='phone'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <Textarea
            placeholder='Ваши пожелания или вопросы'
            className='bg-muted/50 dark:bg-muted/80'
            aria-label='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
          />
          <Button type='submit' className='hover:opacity-70 transition-opacity' disabled={isSubmitting}>
            {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
          </Button>
        </form>
      </div>

      <hr className='w-11/12 mx-auto' />
    </section>
  );
};
