import {Button} from '@/components/ui/button';
import {Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import {useToast} from '@/components/ui/use-toast';
import {useState} from 'react';

export const OrderModal = ({pricing}) => {
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

    const TELEGRAM_API_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
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
  );
};
