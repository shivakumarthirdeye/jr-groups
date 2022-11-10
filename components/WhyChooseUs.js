import { QualityProduct, QualityWork, ServiceSupport } from './SVGs';

const whyUs = [
  {
    id: 1,
    Svg: QualityWork,
    title: 'Quality of work',
    description: `We provide the best security with the help of the latest technology with dependable service support to the customers. We create an environment where employees collaborate closely and proactively with customers to address their issues and boost customer satisfaction.
`,
  },
  {
    id: 2,
    Svg: QualityProduct,
    title: 'Quality products',
    description: `We choose goods that offer cutting-edge fire detection solutions using cutting-edge products and modern technology. We concentrate on providing the top solutions and products in our sector.

`,
  },
  {
    id: 3,
    Svg: ServiceSupport,
    title: 'Service support',
    description: `Our employees are skilled at offering top-notch services. Our services are always expanding and growing. To support our clients, we research and evaluate cutting-edge technology. Continually developing new products and services. Further, the after-sales service that we provide is also of the best quality.

`,
  },
];

const WhyChooseUs = () => {
  return (
    <section className='bg-[#1F375F]  py-20'>
      <div className='container'>
        <div className='my-4 relative mx-auto  w-fit'>
          <h1 className={`text-white  text-3xl md:text-[42px] font-bold`}>
            Why Choose Us
          </h1>
          <div
            className={`bg-primary relative h-1.5 mt-5  rounded-full w-[50%] mx-auto`}
          ></div>
        </div>
        <div className='flex text-white flex-wrap lg:flex-nowrap items-center gap-8 my-14'>
          {whyUs.map(item => {
            const { description, id, Svg, title } = item;
            return (
              <div
                key={id}
                className='flex flex-col justify-center items-center'
              >
                <Svg />
                <div className='my-5 text-center'>
                  <h1 className='text-2xl font-bold'>{title}</h1>
                  <p className='mt-4'>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
