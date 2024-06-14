import { useTranslation } from 'react-i18next';
import {ImMobile} from 'react-icons/im';
import {BsWhatsapp} from 'react-icons/bs';
import {CgMail} from 'react-icons/cg';
import {FaFacebookF} from 'react-icons/fa';
import {RiTwitterLine} from 'react-icons/ri';
import {FiInstagram} from 'react-icons/fi';
import {BiLogoLinkedin} from 'react-icons/bi';
const Footer=()=>{
    const {t}=useTranslation();
    return(
        <div className='px-16 pt-14 text-title-text'>

            <div className='flex  justify-center m-auto   leading-loose gap-16 md:flex-row flex-col'>
                 <div className='md:w-2/4 w-full'>
                    <h2 className='text-2xl pb-3 text-white'><span className='text-lightOrange ' >B</span>alm</h2>
                    <p>{t('footerP1')}</p>
                 </div>

                 <div  className='md:w-1/4 w-full '>
                    <h3 className='pb-3 text-lightOrange'>{t('linksImport')}</h3>
                    <ul>
                        <li><a href='#'>{t('link1')}</a></li>
                        <li><a href='#'>{t('link2')}</a></li>
                        <li><a href='#'>{t('link3')}</a></li>
                    </ul>
                 </div>

                 <div  className='md:w-1/4 w-full'>
                 <h3 className='pb-3 text-lightOrange'>{t('customerService')}</h3>
                    <div className='flex gap-3 text-center'>
                        <div>
                            <CgMail/>
                            <p className='text-xs pt-2'>{t('gmail')}</p>
                        </div>
                        <div>
                            <BsWhatsapp/>
                            <p className='text-xs pt-2'>{t('whatsApp')}</p>
                        </div>
                        <div>
                            <ImMobile/>
                            <p className='text-xs pt-2'>{t('mobile')}</p>
                        </div>
                    </div>
                 </div>
            </div>


            <div className='py-12'>
                <h3 className='pb-3'>{t('connectUs')}</h3>
                <ul className='flex gap-3 items-center'>
                <li><a href='#'><BiLogoLinkedin/></a></li>
                <li><a href='#'><FiInstagram/></a></li>
                <li><a href='#'><RiTwitterLine/></a></li>
                    <li><a href='#'><FaFacebookF/></a></li>
                 
                
               
                </ul>
            </div>


            <p className='text-center text-sm pb-2'>{t('lastP')}</p>
        </div>
    )
}
export default Footer;
