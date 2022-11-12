import img1 from '@/assets/images/products/1.png';
import img2 from '@/assets/images/products/2.webp';
import img3 from '@/assets/images/products/3.png';
import img4 from '@/assets/images/products/4.png';
import img5 from '@/assets/images/products/5.jpg';
import Title from './Title';

const products = [
  {
    id: 1,
    img: img1,
    title: 'CCTV',
  },
  {
    id: 2,
    img: img2,
    title: 'Fire Detector',
  },
  {
    id: 3,
    img: img3,
    title: 'Access Control',
  },
  {
    id: 4,
    img: img4,
    title: 'public address system',
  },
  {
    id: 5,
    img: img5,
    title: 'Fire Suppression System',
  },
];

const OurProducts = () => {
  return (
    <section id='products' className='bg-darkBlue py-20'>
      <div className='container'>
        <Title
          subheading='PORTFOLIO'
          heading='Our Products'
          headingColor='text-white'
          subColor='text-primary'
          borderBg='bg-primary'
        />
        <div className='my-10 flex gap-10 flex-wrap justify-center'>
          {products.map(item => {
            const { id, img, title } = item;
            return (
              <div key={id} className='max-w-[346px] sm:h-[374px] w-full'>
                <img
                  src={img.src}
                  className='w-full rounded-t-lg h-[80%]  '
                  alt=''
                />
                <div className='bg-white rounded-b-lg py-3 h-[20%] flex items-center justify-center '>
                  <h1 className=' sm:text-xl lg:text-2xl font-medium capitalize'>
                    {title}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
