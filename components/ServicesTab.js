import React, { useState } from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import img3 from '@/assets/images/products/1.png';
import img1 from '@/assets/images/products/2.webp';
import img2 from '@/assets/images/products/3.png';
import img5 from '@/assets/images/products/4.png';
import img6 from '@/assets/images/products/5.jpg';
import img4 from '@/assets/images/products/6.jpg';

const tabs = [
  {
    id: 1,
    title: 'Fire Safety',
    key: 'fire safety',
  },
  {
    id: 2,
    title: 'Access Control',
    key: 'access control',
  },
  {
    id: 3,
    title: 'CCTV',
    key: 'cctv',
  },
  {
    id: 4,
    title: 'Intruder Alarms ',
    key: 'intruder alarms ',
  },
  {
    id: 5,
    title: 'Public Address System',
    key: 'public address system',
  },
  {
    id: 6,
    title: 'Fire Suppression System',
    key: 'fire suppression system',
  },
];

const tabContents = [
  {
    id: 1,
    img: img1,
    key: 'fire safety',
    description: `Regardless of the space domain, fire safety is the most crucial component of all security systems. In many sectors, such as schools, hospitals, hotels, and commercial districts with significant foot traffic, fire safety precautions are essential and required by law to be implemented. To efficiently maintain round-the-clock monitoring and secure the protection of people and material assets, JR Groups offers comprehensive services in fire safety management.


`,
  },
  {
    id: 2,
    img: img2,
    key: 'access control',
    description: `An important aspect of a building's security is access control. An access control system improves your existing security system by enabling you to authorise and know who is in your building at any given time. It can restrict and/or monitor who goes where and when. Your employees', buildings', and assets' security will be improved by the system. A possible holistic security approach involves integration with other security fields, such as CCTV and intruder detection.

`,
  },
  {
    id: 3,
    img: img3,
    key: 'cctv',
    description: `For the protection of all types of space settings, CCTV surveillance systems are the most crucial security system. We are experts at installing CCTV systems using equipment from top-quality manufacturers with a proven track record. In India, we are the top supplier of CCTV surveillance systems. Our experts recommend the best kind of CCTV systems and assist with setup, instruction, and product maintenance. Different CCTV surveillance system types are available, and depending on the location, each type is used in a different setting.

`,
  },
  {
    id: 4,
    img: img4,
    key: 'intruder alarms ',
    description: `Electronic components such as control panels, sensors, cameras, locks, motion detectors, and other communication tools are included in intrusion security alarm systems to help alarm when an unauthorised intrusion occurs into secured premises. It is possible to build a complex intrusion alarm system that helps you protect residential spaces by using a variety of products with relevant applications, such as glass break detectors, motion capture sensors, sirens, etc., that are widely available on the market.




`,
  },
  {
    id: 5,
    img: img5,
    key: 'intruder alarms ',
    key: 'public address system',
    description: `Speakers and amplifiers are the main components of public address systems. Public address systems, often known as sound reinforcement systems, link two acoustic sound sources to create high-quality sound. These devices also help in the amplification and distribution of soundwaves that have been acquired from a source; they are typically used to alert people to emergencies.
`,
  },
  {
    id: 6,
    img: img6,

    key: 'fire suppression system',

    description: `Being the first line of defence against fire outbreaks, fire suppression systems are essential for any building, whether it be residential or commercial. JR Groups promises to protect any building from fire by providing services for the installation, commissioning, testing, auditing, and maintenance of fire suppression systems.



`,
  },
];

const ServicesTab = () => {
  const [currentTab, setCurrentTab] = useState('fire safety');

  console.log(
    tabContents.filter(item => {
      return item.key === currentTab;
    })
  );
  return (
    <section>
      <div className='container grid gap-4 gap-y-10 md:grid-cols-[350px_1fr] xl:grid-cols-[400px_1fr]'>
        <div>
          <ul className='border border-[#DCDEDF] rounded p-5'>
            {tabs.map(item => {
              const { id, title, key } = item;
              return (
                <li
                  key={id}
                  className={`${
                    currentTab === key
                      ? 'bg-darkBlue text-white font-semibold'
                      : 'bg-[#F3F3F3] font-medium'
                  } cursor-pointer flex items-center space-x-1  p-2 my-3 rounded `}
                  onClick={() => {
                    setCurrentTab(key);
                  }}
                >
                  <MdOutlineArrowForwardIos
                    className={`${
                      currentTab === key ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  <h1>{title}</h1>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          {tabContents
            .filter(item => {
              return item.key === currentTab;
            })
            .map(item => {
              const { description, id, img, key } = item;

              return (
                <div key={id}>
                  <img
                    className='max-h-[450px] rounded-xl w-full object-cover'
                    src={img.src}
                    alt=''
                  />
                  <div className='my-10 text-sm sm:text-base leading-[34px]'>
                    <p>{description}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ServicesTab;
