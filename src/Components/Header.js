import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import headerImg1 from '../assets/headerImg.png';
import headerImg2 from '../assets/headImageHover.png'
import { useEffect, useState } from 'react';
import {AiFillStar}from 'react-icons/ai'

const Header=()=>{
    const { t } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18next.language);
    const [isHovered, setIsHovered] = useState(false);
    useEffect(() => {
      // Listen for language changes and update the selectedLanguage state
      const languageChangeHandler = () => {
        setSelectedLanguage(i18next.language);
      };
     
      i18next.on('languageChanged', languageChangeHandler);
  
      return () => {
        // Remove the event listener when the component unmounts
        i18next.off('languageChanged', languageChangeHandler);
      };
    }, []);
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    // Function to handle mouse leave (hover off) event
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    return(
<div className={`py-18 flex justify-between items-center ${selectedLanguage === 'ar' ? 'md:flex-row' : 'md:flex-row-reverse'} md:flex-row flex-col`}>


   {/* image section */}
    
   <div className='relative sm:block hidden font-Poppins w-2/3'>
    <button className=' absolute top-12 -left-12 text-xl bg-white border-btn-border text-text-btn border-4 rounded-full px-16 font-bold py-3' type='button'>LOREAL</button>
    <button className='absolute bottom-3 left-4 text-xl bg-white border-btn-border text-text-btn border-4 rounded-full px-12 font-bold py-3' type='button'>18K</button> 
    <button className='flex items-center gap-3 absolute -bottom-5 text-xl right-3 bg-white border-btn-border text-text-btn border-4 border-opacity-50 rounded-full px-8 font-bold py-3' type='button'><AiFillStar  fill='#FFD057' />4.8</button>
        <img className='transition duration-75'   src={isHovered ? headerImg2 : headerImg1}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} 
        
        alt="header image"/>

    </div>


    {/*text section */}
    <div className='px-12 md:pt-1 pt-8 '>
        <h1 className={`sm:text-5xl text-2xl leading-snug  pb-3 sm:text-left text-center font-Poppins `} >{t('main-header-text')}</h1>
        <h2 className='text-lightBrown sm:text-3xl text-2xl text-center'>{t('second-header-text')}</h2>
    </div>
 


</div>
    )
}
export default Header;