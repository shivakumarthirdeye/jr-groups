import Title from './Title';
import customer1 from '@/assets/images/customers/1.png';
import customer2 from '@/assets/images/customers/2.svg';
import customer3 from '@/assets/images/customers/3.png';
import customer4 from '@/assets/images/customers/4.png';
import customer5 from '@/assets/images/customers/5.png';

const customers = [
  {
    id: 1,
    img: customer1,
  },
  {
    id: 2,
    img: customer2,
  },
  {
    id: 3,
    img: customer3,
  },
  {
    id: 4,
    img: customer4,
  },
  {
    id: 5,
    img: customer5,
  },
];

const Customers = () => {
  return (
    <section className='container'>
      <Title heading={'Happy Customers'} subheading='Some of our valuable' />
      <div className='my-10 md:my-28 lg:grid flex flex-wrap justify-center gap-20  lg:grid-cols-5 items-center'>
        {customers.map(item => {
          const { id, img } = item;
          return <img src={img.src} className='w-[130px]' key={id} alt='' />;
        })}
      </div>
    </section>
  );
};

export default Customers;
