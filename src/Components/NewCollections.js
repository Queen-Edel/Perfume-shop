import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import imgGrid1 from '../assets/grid1.png';
import imgGrid2 from '../assets/grid2.png';
import imgGrid3 from '../assets/grid3.png';
import imgGrid4 from '../assets/grid4.png';
import imgGrid5 from '../assets/grid5.png';
import imgGrid6 from '../assets/grid6.png';
import imgGrid7 from '../assets/grid7.png';
import imgGrid8 from '../assets/grid8.png';
const NewCollections=()=>{
    const { t } = useTranslation();
    return(
        <div className='text-center '>
<h2 className='text-lightBrown text-4xl pb-5'>{t('newCollections')}</h2>
<p className='text-[#898989] px-2'>{t('newCollectionsP')}</p>

<div className='relative pt-16 md:h-[720px] h-full md:block flex flex-col'>
<img className='md:absolute static left-0'  src={imgGrid1} alt='collections'/>
<img className='md:absolute static left-0 bottom-0' src={imgGrid2} alt='collections'/>
<img className='md:absolute static left-[200px] bottom-[90px]' src={imgGrid3} alt='collections'/>
<img className='md:absolute static left-[460px] bottom-[160px]' src={imgGrid4} alt='collections'/>
<img className='md:absolute static right-[70px] bottom-[45px]'  src={imgGrid5} alt='collections'/>
<img  className='md:absolute static right-[350px] bottom-0' src={imgGrid6} alt='collections'/>
<img className='md:absolute static right-0 top-[25px] '  src={imgGrid7} alt='collections'/>
<img className='md:absolute static right-[220px] top-[110px]' src={imgGrid8} alt='collections'/>
</div>
        </div>
    )
}

export default NewCollections;