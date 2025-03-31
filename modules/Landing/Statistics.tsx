import Image from "next/image";

export const Statistics = () => {
  interface StatsProps {
    quantity: string;
    description: string;
  }

  const stats: StatsProps[] = [
    {
      quantity: 'Запуск за 7 дней',
      description: 'Проданных магазинов'
    },
    {
      quantity: 'Простая и удобная админ-панель',
      description: 'Общий доход клиентов'
    },{
      quantity: 'Готов к продвижению и рекламе',
      description: 'Общий доход клиентов'
    },
  ];

  return (
    <section id='statistics'>
      <div className='grid grid-cols-1 mt-5 sm:mt-0 lg:grid-cols-3 gap-8'>
        {stats.map(({quantity, description}: StatsProps) => (
          <div key={description} className='space-y-2 text-center flex flex-col items-center'>
            <Image src='/image/true.png' alt="true" width={30} height={30} />
            <p className='text-xl sm:text-2xl font-bold'>{quantity}</p>
            {/* <p className='text-xl text-muted-foreground'>{description}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
};
