import React, { useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import {BsArrowLeft} from 'react-icons/bs'
import { useTranslation } from 'react-i18next';
import bestType1 from '../assets/bestType1.png';
import bestType2 from '../assets/bestType2.png';
import bestType3 from '../assets/bestType3.png';
import bestType4 from '../assets/bestType4.jpg';
import i18next from 'i18next';

const BestTypes = () => {
  const { t ,i18n} = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const cards = [
    { img: `${bestType2}` },
    { img: `${bestType3}` },
    { img: `${bestType4}` },
  ];

  let [startIndex, setStartIndex] = useState(0);

  const handlePrevClick = () => {
    console.log(startIndex);
    if (startIndex === 2) {
        setStartIndex(0);
       
      
    }else{
        setStartIndex((prevIndex) => prevIndex + 1);
    }
     
 
  };

  const handleDotClick = (index) => {
    setStartIndex(index);
  };
  useEffect(() => {
    setSelectedLanguage(i18n.language);
  }, [i18n.language]);

  return (
    <div className="flex items-center justify-center gap-5 mt-5 mb-28 md:flex-row flex-col">
      <div className="md:w-4/12 w-full px-10 md:text-right text-center">
        <h2 className="text-[#D9D9D9] text-4xl leading-snug">{t('bestType')}</h2>
        <p className="text-[#898989] text-sm leading-snug md:my-12 my-6 ">{t('bestTypeP')}</p>
        <button type="button" className="bg-lightOrange text-white px-5 py-3">
          {t('bestTypeBtn')}
        </button>
      </div>

      <div className="md:w-8/12 w-full ">
        <div className="slider relative">
          <button onClick={handlePrevClick} className="absolute md:left-8 left-1 md:top-52 top-28 bg-white rounded-full p-1">
            <MdOutlineKeyboardArrowLeft size="30px" color='#C2966F' />
          </button>
          <div className="flex">
            <div className='relative'>
            <div className='absolute bottom-6 left-4 text-left bg-lightOrange  p-2 '>
                <BsArrowLeft/>
                </div>
                <div className='absolute bottom-6 left-12 text-left bg-[white] bg-opacity-70 p-6 '>
                    <p className='text-[#616161] pb-3' dir='ltr'>40% ____ SALE</p> 
                     <h4 className='text-[#3A3A3A]'>for men</h4>
                </div>
            <img alt='image' src={bestType1}/>
            </div>
            
            {cards.slice(startIndex, startIndex + 1).map((card, index) => (
              <div
                key={index}
                className={`slider-card`}
              >
                <img alt={`Card ${startIndex + index}`} src={card.img} />
              </div>
            ))}
          </div>

          <div className={`dots flex gap-4 absolute  bottom-18 ${selectedLanguage === 'ar' ? 'right-1/2' : 'left-1/2'}`}>
          {cards.map((_, index) => (
            <p
              key={index}
              className={`dot ${index === startIndex ? 'bg-lightOrange ' : 'bg-slate-100'}  w-3 h-3 rounded-full`}
              onClick={() => handleDotClick(index)}
            ></p>
          ))}
        </div>
        </div>

       
      </div>
    </div>
  );
};

export default BestTypes;
