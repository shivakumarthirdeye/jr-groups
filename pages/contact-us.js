import Hero from '@/components/common/Hero';
import ContactInfo from '@/components/ContactInfo';
import Layout from '@/components/Layout';
import Title from '@/components/Title';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactUs = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),

    phone: Yup.string()
      .matches(/^\d{10}$/, 'Phone number must be 10 digits')
      .required('Phone number is required'),
    message: Yup.string().required('Message is required'),
  });
  return (
    <Layout>
      <Hero
        heading='Contact Us'
        description={
          <>Want to know how can we help and protect you, Get in Touch!</>
        }
      />
      <div className='my-10 md:my-20'>
        <Title subheading='Drop a Line' heading='Send Your Message' />
        <div className='mt-8 md:mt-16'>
          <ContactInfo />
        </div>
      </div>
      <div className='max-w-[650px] my-10 mx-auto shadow-lg p-5'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          // onSubmit={onSubmit}
        >
          <Form className='flex-1 mx-auto lg:mx-0  max-w-[600px] my-10 flex flex-col gap-8'>
            <div className='w-full '>
              <Field
                type='text'
                name='name'
                placeholder='Name'
                className=' py-4  rounded-md bg-transparent    border border-black border-opacity-30 px-3 outline-none w-full'
              />
              <ErrorMessage name='name'>
                {msg => <p className='text-red-500 pt-1.5'>{msg}*</p>}
              </ErrorMessage>
            </div>

            <div>
              <Field
                type='email'
                name='email'
                placeholder='Email id'
                className=' py-4  rounded-md bg-transparent    border border-black border-opacity-30 px-3 outline-none w-full'
              />
              <ErrorMessage name='email'>
                {msg => <p className='text-red-500 pt-1.5'>{msg}*</p>}
              </ErrorMessage>
            </div>
            <div>
              <Field
                type='number'
                name='phone'
                placeholder='Phone no'
                className=' py-4  rounded-md bg-transparent    border border-black border-opacity-30 px-3 outline-none w-full'
              />
              <ErrorMessage name='phone'>
                {msg => <p className='text-red-500 pt-1.5'>{msg}*</p>}
              </ErrorMessage>
            </div>
            <div>
              <Field
                as='textarea'
                name='message'
                placeholder='Message'
                className=' py-4  rounded-md bg-transparent  h-[163px]  resize-none  border border-black border-opacity-30 px-3 outline-none w-full'
              />
              <ErrorMessage name='message'>
                {msg => <p className='text-red-500 pt-1.5'>{msg}*</p>}
              </ErrorMessage>
            </div>
            <div className=''>
              <button className='bg-primary text-white max-w-[193px] w-full py-3.5 rounded-md'>
                SEND A MESSAGE
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </Layout>
  );
};

export default ContactUs;
