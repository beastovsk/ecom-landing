'use client';

import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
import {Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {useToast} from '@/components/ui/use-toast';
import {Check} from 'lucide-react';
import {useState} from 'react';
import {Textarea} from '@/components/ui/textarea';

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
      'Заказы через личный кабинет',
      'Базовая поддержка'
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
      'Интеграция онлайн оплат и заказы в личном кабинете',
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {toast} = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    plan: '',
    questions: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.plan) {
      toast({
        title: 'Ошибка валидации',
        description: 'Пожалуйста, заполните все обязательные поля.'
      });
      return;
    }

    setIsSubmitting(true);

    const TELEGRAM_API_TOKEN = '7319980228:AAGYT0fdIfxgJrLBYbp8XkX4oDP-UbBjoSM';
    const CHAT_ID = '1069385289';
    const message = `Возможная покупка:\nИмя: ${formData.name}\nТелефон: ${formData.phone}\nПлан: ${formData.plan}\nВопросы и желания: ${formData.questions}`;

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

      setFormData({name: '', phone: '', plan: '', questions: ''});
    } catch (error) {
      toast({
        title: 'Ошибка отправки',
        description: 'Пожалуйста, попробуйте снова.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  };

  const handlePlanChange = (value: string) => {
    setFormData((prev) => ({...prev, plan: value}));
  };

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
                ) : (
                  <Badge variant='outline' className='text-sm text-primary'>
                    Классика
                  </Badge>
                )}
              </CardTitle>
              <div>
                <span className='text-3xl font-bold'>{pricing.price}</span>
                <span className='text-muted-foreground'> /услуга</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Dialog>
                <DialogTrigger className='w-full'>
                  <Button className='w-full'>{isSubmitting ? 'Отправка...' : pricing.buttonText}</Button>
                </DialogTrigger>
                <DialogContent>
                  {/* Форма в DialogContent */}
                  <div className='flex flex-col gap-2 mt-5'>
                    <h2 className='mb-5 text-xl font-medium'>Ваша заявка</h2>
                    <Input
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder='Ваше имя'
                      required
                      className='w-full p-2 border rounded'
                    />
                    <Input
                      type='tel'
                      name='phone'
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder='Ваш телефон'
                      className='w-full p-2 border rounded'
                    />

                    <Select onValueChange={handlePlanChange} value={formData.plan}>
                      <SelectTrigger id='plan'>
                        <SelectValue placeholder='Выберите план' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='Стандартный пакет'>Стандартный пакет</SelectItem>
                        <SelectItem value='Премиум пакет'>Премиум пакет</SelectItem>
                        <SelectItem value='Доработка магазина'>Доработка магазина</SelectItem>
                      </SelectContent>
                    </Select>
                    <Textarea
                      name='questions'
                      value={formData.questions}
                      onChange={handleInputChange}
                      placeholder='Ваши вопросы и пожелания (необязательно)'
                      className='w-full p-2 border rounded'
                    />
                  </div>
                  <DialogFooter>
                    <DialogClose className='w-full'>
                      <Button type='submit' className='w-full mt-3' onClick={handleSubmit} disabled={isSubmitting}>
                        {isSubmitting ? 'Отправка...' : pricing.buttonText}
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>

            <hr className='w-4/5 mx-auto mb-4' />

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
