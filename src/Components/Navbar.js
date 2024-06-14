import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import logo from '../assets/logo.png'
import { useState } from 'react';
import   {  BsArrowRight,  BsCart3} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai';
import {CgMenuCheese} from 'react-icons/cg'

const Navbar=()=>{
  const { t } = useTranslation();
  const [roundedClass, setRoundedClass] = useState('rounded-l-full'); 
  const [roundedSelect, setRoundedSelect] = useState('rounded-r-full'); 
  const [textDir, setTextDir] = useState('text-left'); 

  // Handle language change when the user selects a different option
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    
    // Change the language
    i18next.changeLanguage(selectedLanguage);

    // Update the text direction of the page
    document.body.dir = selectedLanguage === 'ar' ? 'rtl' : 'ltr';
    setRoundedClass(selectedLanguage === 'ar' ? 'rounded-l-full' : 'rounded-r-full');
    setRoundedSelect(selectedLanguage === 'ar'?'rounded-r-full':'rounded-l-full');
    setTextDir(selectedLanguage === 'ar'?'text-left':'text-right');
    
  };



const showMenue=()=>{
document.querySelector('.toggle').style.display="flex";
document.querySelector('.toggle').style.position="absolute";
document.querySelector('.toggle').style.zIndex="100";
document.querySelector('.toggle').style.right="0px";
document.querySelector('.toggle').style.top="200px";
document.querySelector('.menue').style.display="none";
document.querySelector('.cross').style.display="block";

}
const closeMenue=()=>{
  document.querySelector('.toggle').style.display="none";
  document.querySelector('.menue').style.display="block";
}

  return (
    <div>
      <div className={`lang-sec h-9 ${textDir} px-8 pt-2 font-light`}>
        <select
          data-te-select-init
          className="px-5 bg-transparent text-white ml-10 outline-none"
          onChange={handleLanguageChange}
          value={i18next.language}
        >
          <option className='p-2 bg-black text-white-color' value="ar">العربيه</option>
          <option className='p-2 bg-black text-white-color' value="en">English</option>
        </select>

          

          
          </div>


{/* start second search section */}
          <div className='flex md:items-center items-start  md:w-[75%] pb-10 justify-between md:px-28 px-5 gap-4 md:flex-row flex-col'>


          <div >
             <img alt='logo' src={logo}/>
            </div>


            <div className="flex justify-center self-center  ">
            <select data-te-select-init className={`px-3  bg-transparent text-white-color ${roundedSelect}  border h-10 border-l-white-color outline-none`}>
            <option className='p-2' value="1">{t('selectText')} </option>
            </select>
            <input className={`bg-transparent border border-white-color md:w-[330px] w-[180px] text-white-color px-3 ${roundedClass} h-10  outline-none`}
            />
            </div>

          </div>
          {/* end second section */}

          <nav className='text-white-color md:px-28 px-8 gap-4 py-5 flex justify-between  items-center'>
            <ul className='menue md:hidden block ' onClick={showMenue}><li><CgMenuCheese fill='white' size="30px"/></li></ul>
            <ul className='toggle md:flex hidden md:gap-6 gap-4 md:py-0 py-4  text-sm items-center md:flex-row flex-col bg-zinc-950 w-full h-fit'>
            <li onClick={closeMenue} className='absolute md:hidden block right-5 top-3 cross'><a className='hover:text-white ' href='#'> X</a></li>
              <li className=''><a className='hover:text-white ' href='#'> {t('nav-li-1')}</a></li>
              <li className=''><a className='hover:text-white ' href='#'>{t('nav-li-2')}</a></li>
              <li className=''><a className='hover:text-white ' href='#'>{t('nav-li-3')}</a></li>
              <li className=''><a className='hover:text-white ' href='#'>{t('nav-li-4')}</a></li>
              <li className=''><a className='hover:text-white ' href='#'>{t('nav-li-5')}</a></li>
              <li className=''><a className='hover:text-white ' href='#'>{t('nav-li-6')}</a></li>
              <li className=''><select className='bg-transparent px-3 hover:text-white'>
                <option className='bg-black hover:bg-black bg-opacity-50'>{t('nav-li-7')}</option>
                <option className='bg-black hover:bg-black bg-opacity-50'>Versace</option>
                <option className='bg-black hover:bg-black bg-opacity-50'>Nautical</option>
                </select></li>
              <li className=''><a  className='hover:text-white ' href='#'>{t('nav-li-8')}</a></li>
            </ul>

            <ul className='flex gap-6 '>
            <li className="relative">
    <div className="absolute top-[-3px] left-4 w-4 h-4 flex items-center justify-center bg-red-500 rounded-full">
      <span className="text-white text-xs">0</span>
    </div>
    <BsArrowRight className="text-2xl" />
  </li>
  <li className="relative">
    <div className="absolute top-[-3px] left-4 w-4 h-4 flex items-center justify-center bg-red-500 rounded-full">
      <span className="text-white text-xs">0</span>
    </div>
    <AiOutlineHeart className="text-2xl" />
  </li>
  <li className="relative">
    <div className="absolute top-[-3px] left-4 w-4 h-4 flex items-center justify-center bg-red-500 rounded-full">
      <span className="text-white text-xs">0</span>
    </div>
    <BsCart3 className="text-2xl" />
  </li>
        
            </ul>
          </nav>
        </div>
    )
}
export default Navbar;