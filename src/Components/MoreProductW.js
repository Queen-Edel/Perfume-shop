import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md';
import { useEffect, useState } from 'react';
import {AiOutlineShoppingCart,AiOutlineHeart} from 'react-icons/ai';
import {FiArrowRight,FiArrowLeft} from 'react-icons/fi';
import womenper1 from '../assets/perwomen1.png';
import womenper2 from '../assets/perwomen2.png';
import womenper3 from '../assets/perwomen3.png';
import womenper4 from '../assets/perwomen4.png';
const MoreProductsWomen=()=>{
    const { t ,i18n} = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
    const cards = [
        {
          title:`${t('womenPer1')}`,
          salary: `${t('womenPerSal1')}`,
          img:`${womenper1}`,
      
         
        },
        {
            title:`${t('womenPer2')}`,
            salary: `${t('womenPerSal2')}`,
          img:`${womenper2}`,
          sale:true
        },
        {
            title:`${t('womenPer3')}`,
            salary: `${t('womenPerSal3')}`,
          img:`${womenper3}`,
   
        },
        {
            title:`${t('womenPer4')}`,
          salary: `${t('womenPerSal4')}`,
          img:`${womenper4}`,
          new:true
        },
        {
            title:`${t('womenPer2')}`,
          salary: `${t('womenPerSal2')}`,
          img:`${womenper2}`,
        
        }
      ];
      const [startIndex, setStartIndex] = useState(0);
      const endIndex = startIndex + 4; // Display four cards at a time
    
      const handlePrevClick = () => {
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
        <div className="mt-24 ">
        <div className='w-full mt-20 py-24 bg-forWomen bg-cover bg-no-repeat sm:h-[570px] h-[260px] relative mb-24'>
          <h2 className='text-[#DDDEDE] text-left sm:text-5xl text-2xl absolute sm:left-24 left-2 sm:top-32 top-24  px-2 leading-snug '>New Arrival For Ladys</h2>
          <p className="text-[#CCCCCC] sm:text-6xl text-3xl absolute sm:left-28 left-4 sm:top-60 top-36 ">SALE</p>
          <p className="text-[#FFEDBF] sm:text-5xl text-2xl absolute sm:left-44 left-8 sm:bottom-52 bottom-8">40%</p>
          <button className='absolute bottom-2 right-0 bg-[#DADADA] text-text-btn px-12 py-3 font-bold hover:bg-text-btn hover:text-white transition duration-75'>For women</button>
        </div>

        <div className='flex sm:px-28 px-10  items-center pb-6'>
                <h3 className='text-[#BD8F68]'>{t('moreProducts')}</h3>
                <MdOutlineKeyboardArrowDown fill='rgba(189, 143, 104, 0.98)' size='35px'/>
           </div>

           <div className='flex w-10/12 m-auto justify-evenly gap-7 sm:flex-row flex-col '>
           {cards.slice(startIndex, endIndex).map((card, index) => (
          <div key={index} className={`card md:w-1/4 border border-white`}>

                    <div className='relative'>
                    <div className='absolute right-2 bg-white border border-lightOrange top-2 rounded-full w-6 h-6 flex justify-center items-center'>   <AiOutlineShoppingCart  fill='#C2966F'/></div>
                        <div className='absolute right-2 bg-lightOrange top-9 rounded-full w-6 h-6 flex justify-center items-center'>  <AiOutlineHeart  /></div>
                      {(card.new ?  <div className='absolute left-2 top-5 bg-[#2EC1AC] w-12 h-12 text-center pt-3 rounded-full '>New</div> : false) }
                      {(card.sale ?  <div className='absolute left-2 top-5 bg-[#DC3545] w-12 h-12 text-center pt-3 rounded-full '>50-</div> : false) }
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
       


        </div>
    )
}
export default MoreProductsWomen;