import person1 from '../assets/people1.png';
import person2 from '../assets/people2.jpg';
import person3 from '../assets/people3.png';
import { useTranslation } from 'react-i18next';
import {AiFillStar} from 'react-icons/ai'
import i18next from 'i18next';
const CustomerOpinion=()=>{
    const {t} =useTranslation();
    return(
        <div className='flex justify-between items-center my-36 py-8 gap-8 px-16 m-auto relative md:flex-row flex-col'>
            <div className='absolute w-8/12 md:h-[21rem] h-[60rem] rounded-3xl z-0 top-[-40px]  md:right-0 right-3/12 bg-gradient-to-b from-[#735335] to-[#171717]'> </div>

            <h2 className='md:w-4/12 z-10 text-2xl'>{t('customerOpinion')}</h2>

            <div className=' md:w-3/12 relative'>
                <img alt='person' src={person1} className='rounded-2xl'/>
                <div className='absolute bottom-0 right-[-24px] bg-[#D9D9D9] p-4 rounded-xl text-center'>
                    <h3 className='text-lightBrown text-xs px-4 '>{t('opinion1')}</h3>
                    <div className='flex justify-center py-3'>
                        <AiFillStar fill='#FFAD33'/>
                        <AiFillStar fill='#FFAD33'/>
                        <AiFillStar fill='#FFAD33'/>
                        <AiFillStar fill='#FFAD33'/>
                        <AiFillStar fill='#FFAD33'/>
                    </div>
                </div>
            </div>

            <div className=' md:w-3/12 relative '>
            <img alt='person' src={person2} className='rounded-2xl'/>
                <div className='absolute bottom-0 right-[-24px] bg-[#D9D9D9] p-4 rounded-xl text-center'>
                    <h3 className='text-lightBrown text-xs px-4 '>{t('opinion2')}</h3>
                    <div className='flex justify-center py-3'>
                        <AiFillStar fill='#BBBBBB'/>
                        <AiFillStar fill='#FFAD33'/>
                        <AiFillStar fill='#FFAD33'/>
                        <AiFillStar fill='#FFAD33'/>
                        <AiFillStar fill='#FFAD33'/>
                    </div>
                </div>
            </div>

            <div className=' md:w-3/12 relative'>
            <img alt='person' src={person3} className='rounded-2xl'/>
                <div className='absolute bottom-0 right-[-24px] bg-[#D9D9D9] p-4 rounded-xl text-center'>
                    <h3 className='text-lightBrown text-xs px-4 '>{t('opinion3')}</h3>
                    <div className='flex justify-center py-3'>
                        <AiFillStar fill='#FFAD33'/>
                        <AiFillStar fill='#FFAD33'/>
                        <AiFillStar fill='#FFAD33'/>
                        <AiFillStar fill='#FFAD33'/>
                        <AiFillStar fill='#FFAD33'/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CustomerOpinion;