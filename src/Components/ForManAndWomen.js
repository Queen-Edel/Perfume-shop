import manWomen from '../assets/man&women.png';
import manWomenHover from '../assets/man&womenHover.png';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md';
import { useEffect, useState } from 'react';
import {AiOutlineShoppingCart,AiOutlineHeart} from 'react-icons/ai';
import {FiArrowRight,FiArrowLeft} from 'react-icons/fi';
import manandwomen1 from '../assets/man&women1.png';
import manandwomen2 from '../assets/man&women2.png';
import manandwomen3 from '../assets/man&women3.png';
import manandwomen4 from '../assets/man&women4.png';
import manandwomen5 from '../assets/man&women5.png';
const ForManAndWomen=()=>{
  const [isHovered, setIsHovered] = useState(false);
    const { t ,i18n} = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
    const cards = [
        {
          title:`${t('manWomenPer1')}`,
          salary: `${t('manWomenSal1')}`,
          img:`${manandwomen1}`,
      
         
        },
        {
            title:`${t('manWomenPer2')}`,
            salary: `${t('manWomenSal2')}`,
          img:`${manandwomen2}`,
          sale:true
        },
        {
            title:`${t('manWomenPer3')}`,
            salary: `${t('manWomenSal3')}`,
          img:`${manandwomen3}`,
   
        },
        {
            title:`${t('manWomenPer4')}`,
          salary: `${t('manWomenSal4')}`,
          img:`${manandwomen4}`,
        
        },
        {
            title:`${t('manWomenPer5')}`,
          salary: `${t('manWomenSal5')}`,
          img:`${manandwomen5}`,
        
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
      const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      // Function to handle mouse leave (hover off) event
      const handleMouseLeave = () => {
        setIsHovered(false);
      };
    return(
        <div>
        <div className='flex sm:flex-row flex-col relative justify-center items-center gap-10 text-left border-2 border-t-white border-b-white py-20 my-10'>

            <button className='absolute sm:top-10 top-4 right-0 bg-[#DADADA] text-text-btn px-12 py-3 font-bold hover:bg-text-btn hover:text-white transition duration-75'>for woman , men</button>
            
            <h2 className='text-3xl text-[#EDE1CE]'>NEW <br/> ARRAIVAL</h2>

            <div className='text-center'>
                <img className='transition duration-75' src={isHovered ? manWomenHover : manWomen}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} 
         alt='for unisix'/>
                <h3 className='text-lightBrown text-2xl py-3'>Woman & Men</h3>
                <p className='text-lightBrown  py-5'>WWW.BALM.COM</p>
                <hr className='w-1/4 m-auto bg-lightBrown text-lightBrown '/>
            </div>

            <h2 className='text-3xl text-[#EDE1CE]'>NEW <br/> ARRAIVAL</h2>
        </div>


        <div className='flex sm:px-28 px-10  items-center pb-6 sm:pt-28 pt-12'>
                <h3 className='text-[#BD8F68]'>{t('moreProducts')}</h3>
                <MdOutlineKeyboardArrowDown fill='rgba(189, 143, 104, 0.98)' size='35px'/>
           </div>

        <div className='flex w-10/12 m-auto justify-evenly gap-7 sm:flex-row flex-col '>
           {cards.slice(startIndex, endIndex).map((card, index) => (
          <div key={index} className={`card md:w-1/4 border border-white`}>

                    <div className='relative'>
                    <div className='absolute right-2 bg-white border border-lightOrange top-2 rounded-full w-6 h-6 flex justify-center items-center'>   <AiOutlineShoppingCart  fill='#C2966F'/></div>
                        <div className='absolute right-2 bg-lightOrange top-9 rounded-full w-6 h-6 flex justify-center items-center'>  <AiOutlineHeart  /></div>
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

        <div className={`flex my-10 justify-center items-center sm:pb-28 pb-12 gap-10  ${selectedLanguage === 'ar' ? 'flex-row' : 'flex-row-reverse'}`}>
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
export default ForManAndWomen;