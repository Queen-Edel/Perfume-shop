import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md';
import imgman1 from '../assets/permen1.png';
import imgman2 from '../assets/permen2.png';
import imgman3 from '../assets/permen3.png';
import imgman4 from '../assets/permen4.png';
import imgman5 from '../assets/permen5.png';
import sponser1 from '../assets/robert.png';
import sponser2 from '../assets/versace.png';
import sponser3 from '../assets/nishane.png';
import { useEffect, useState } from 'react';
import {AiOutlineShoppingCart,AiOutlineHeart} from 'react-icons/ai';
import {FiArrowRight,FiArrowLeft} from 'react-icons/fi';
const MoreProductsMen=()=>{
    const { t,i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
    const cards = [
        {
          title:`${t('menPer1')}`,
          salary: `${t('menPerSal1')}`,
          img:`${imgman1}`
        },
        {
            title:`${t('menPer2')}`,
            salary: `${t('menPerSal2')}`,
          img:`${imgman2}`
        },
        {
            title:`${t('menPer3')}`,
            salary: `${t('menPerSal3')}`,
          img:`${imgman3}`
        },
        {
            title:`${t('menPer4')}`,
          salary: `${t('menPerSal4')}`,
          img:`${imgman4}`
        },
        {
            title:`${t('menPer5')}`,
          salary: `${t('menPerSal5')}`,
          img:`${imgman5}`
        }
      ];
      const [startIndex, setStartIndex] = useState(0);
      const endIndex = startIndex + 4; // Display four cards at a time
    
      const handlePrevClick = () => {
        console.log(selectedLanguage);
        if (startIndex > 0) {
          setStartIndex(startIndex - 1);
        } else {
          // Wrap around to the last set of cards when reaching the beginning
          setStartIndex(cards.length - 4);
        }
      };
    
      const handleNextClick = () => {
        if (endIndex < cards.length) {
          setStartIndex(startIndex + 1);
        } else {
          // Wrap around to the first set of cards when reaching the end
          setStartIndex(0);
        }
      };
      useEffect(() => {
        setSelectedLanguage(i18n.language);
      }, [i18n.language]);
    
    return(
        <div>
             <div className='w-full mt-20 py-24 bg-natural-perf bg-cover  bg-no-repeat sm:h-[800px] h-[300px] relative mb-24'>
          <h2 className='text-[#B9B9B9] text-left sm:text-5xl text-2xl absolute sm:left-24 left-2 top-2/4 translate-y-[-1/2] sm:w-1/3 w-1/2 px-8 leading-snug '>{t('natural-perfume')}</h2>
          <button className='absolute bottom-6 right-0 bg-[#DADADA] text-text-btn px-12 py-3 font-bold hover:bg-text-btn hover:text-white transition duration-75'>for men</button>
            </div>


            <div className='flex sm:px-28 px-10 items-center pb-6'>
                <h3 className='text-lightBrown'>{t('moreProducts')}</h3>
                <MdOutlineKeyboardArrowDown fill='rgba(189, 143, 104, 0.98)' size='35px'/>
           </div>

           <div className='flex w-10/12 m-auto justify-evenly gap-7 sm:flex-row flex-col '>
           {cards.slice(startIndex, endIndex).map((card, index) => (
          <div key={index} className={`card md:w-1/4 border border-white`}>

                    <div className='relative'>
                    <div className='absolute right-2 bg-white border border-lightOrange top-2 rounded-full w-6 h-6 flex justify-center items-center'>   <AiOutlineShoppingCart  fill='#C2966F'/></div>
                        <div className='absolute right-2 bg-lightOrange top-9 rounded-full w-6 h-6 flex justify-center items-center'>  <AiOutlineHeart  /></div>
                      
                        <img alt='perfume men' src={card.img} className='w-full'/>
                    </div>
                    <div className='text-center px-6 py-5'>
                        <h3 className='pb-3'>{card.title}</h3>
                        <p className='text-lightOrange'>{card.salary}</p>
                    </div>
                </div>
            ))}
            
        </div>
        <div className={`flex my-10 justify-center items-center pb-10 gap-10  ${selectedLanguage === 'ar' ? 'flex-row' : 'flex-row-reverse'}`}>
            <div className='w-12 h-12 hover:bg-lightOrange  flex justify-center items-center rounded-full transition duration-75 cursor-pointer'>
            <FiArrowRight onClick={handlePrevClick}/> 
            </div>
            <div className='w-12 h-12 hover:bg-lightOrange  flex justify-center items-center rounded-full transition duration-75 cursor-pointer '>
        <FiArrowLeft onClick={handleNextClick}/> 
         </div>
          
        </div>
       

        <div>
          <div className='flex sm:justify-between justify-center items-center md:px-28 px-8 text-lightBrown pb-3 sm:flex-row flex-col'>
            <h3>{t('Browsethroughbrands')}</h3>
            <select className='bg-transparent' value={t('Viewall')}><option>{t('Viewall')}</option></select>
          </div>
          <div className='flex justify-center gap-12 sm:flex-row flex-col md:px-28 px-8'>
            <img className='sm:w-1/3 w-full' src={sponser1} alt='sponsers'/>
            <img className='sm:w-1/3 w-full' src={sponser2} alt='sponsers'/>
            <img className='sm:w-1/3 w-full' src={sponser3} alt='sponsers'/>
          </div>
       </div>
        </div>
    )
}

export default MoreProductsMen;