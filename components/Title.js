const Title = ({
  subheading,
  heading,
  subColor = 'text-darkBlue',
  headingColor = 'text-black',
  borderBg = 'bg-darkBlue',
}) => {
  return (
    <div className='text-center'>
      <h2
        className={`${subColor}  text-lg sm:text-xl md:text-2xl font-semibold`}
      >
        {subheading}
      </h2>
      <div className='text-center flex justify-center'>
        <div className='my-4 relative  w-fit'>
          <h1 className={`${headingColor} text-3xl md:text-[42px] font-bold`}>
            {heading}
          </h1>
          <div
            className={`${borderBg} relative h-1.5 mt-5  rounded-full w-[50%] mx-auto`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Title;
