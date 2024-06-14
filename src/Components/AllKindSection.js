import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import menImg from '../assets/allKindMen.png';
import womenImg from '../assets/AllKindWomen.jpg';
import allImg from '../assets/AllKinds.jpg';

const Allkinds=()=>{
    const { t } = useTranslation();
    return(
        <div className='my-12'>
            <h2 className='title md:text-3xl text-2xl '>
                {t('first-section-heading')}
            </h2>

            <div className='flex mt-12 w-11/12 justify-between m-auto gap-6 items-center sm:flex-row flex-col'>
                <div className='sm:w-1/3 w-1/2 '>
                    <img className='w-full h-fit rounded-tl-[90px] rounded-br-[90px] border-brown-text border-4' src={menImg} alt='kind men'/>
                    <h3 className='text-center pt-8'>{t('nav-li-2')}</h3>
                </div>

                <div className='sm:w-1/3 w-1/2  '>
                    <img src={allImg} alt='for all' className='h-54 w-full border-brown-text rounded-[90px] border-4'/>
                    <h3 className='text-center pt-8'>{t('nav-li-4')}</h3>
                </div>

                <div className='sm:w-1/3 w-1/2  '>
                    <img className='h-fit w-full rounded-tr-[90px] rounded-bl-[90px] border-brown-text border-4' src={womenImg} alt='for women'/>
                    <h3 className='text-center pt-8'>{t('nav-li-3')}</h3>
                </div>



            </div>

         

        </div>
    )
}
export default Allkinds;