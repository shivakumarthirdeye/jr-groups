import profile from '@/assets/images/Profile.png';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
console.log('🚀 ~ file: GetInTouch.js ~ line 2 ~ profile', profile);

const GetInTouch = () => {
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
    <div className='bg-[#1F375F]  py-20'>
      <div className='container mx-auto grid gap-10 items-center grid-cols-[auto_1fr]'>
        <div className='max-w-[484px]  w-full h-full max-h-[484px] '>
          <img src={profile.src} className=' w-full h-full rounded-lg' alt='' />
        </div>
        <div className='text-white'>
          <h1 className='text-[42px] font-bold'>Get In Touch</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            // onSubmit={onSubmit}
          >
            <Form className='flex-1  max-w-[600px] my-10 flex flex-col gap-8'>
              <div className='w-full '>
                <Field
                  type='text'
                  name='name'
                  placeholder='Name'
                  className=' py-4  rounded-md bg-transparent    border border-white px-3 outline-none w-full'
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
                  className=' py-4  rounded-md bg-transparent    border border-white px-3 outline-none w-full'
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
                  className=' py-4  rounded-md bg-transparent    border border-white px-3 outline-none w-full'
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
                  className=' py-4  rounded-md bg-transparent  h-[163px]  resize-none  border border-white px-3 outline-none w-full'
                />
                <ErrorMessage name='message'>
                  {msg => <p className='text-red-500 pt-1.5'>{msg}*</p>}
                </ErrorMessage>
              </div>
              <div className=''>
                <button className='bg-primary text-white max-w-[193px] w-full py-3.5 rounded-md'>
                  SUBMIT
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
