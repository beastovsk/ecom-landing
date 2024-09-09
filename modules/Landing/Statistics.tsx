export const Statistics = () => {
  interface StatsProps {
    quantity: string;
    description: string;
  }

  const stats: StatsProps[] = [
    {
      quantity: '1.5K+',
      description: 'Проданных магазинов'
    },
    {
      quantity: '10K+',
      description: 'Удовлетворённых клиентов'
    },
    {
      quantity: '3M+',
      description: 'Общий доход клиентов'
    },
    {
      quantity: '1K+',
      description: 'Активных магазинов'
    }
  ];

  return (
    <section id='statistics'>
      <div className='grid grid-cols-1 mt-5 sm:mt-0 lg:grid-cols-4 gap-8'>
        {stats.map(({quantity, description}: StatsProps) => (
          <div key={description} className='space-y-2 text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold'>{quantity}</h2>
            <p className='text-xl text-muted-foreground'>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
