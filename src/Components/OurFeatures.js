import car from '../assets/car.png';
import hands from '../assets/hands.png';
import quality from '../assets/quality.png';
import pay from '../assets/pay.png';
import { useTranslation } from 'react-i18next';
const OurFeatures=()=>{
    const { t } = useTranslation();
    const features=[
        {
            img:car,
            title:`${t('feature1')}`,
            description:`${t('featureP1')}`
        },
        {
            img:hands,
            title:`${t('feature2')}`,
            description:`${t('featureP2')}`
        },
          {
            img:quality,
            title:`${t('feature3')}`,
            description:`${t('featureP3')}`
        },
        {
            img:pay,
            title:`${t('feature4')}`,
            description:`${t('featureP4')}`
        }
    ]
    return(
        <div className='md:px-12 px-5'>
            <h2 className='title text-[#735335] py-16 mt-16'>{t('ourFeatures')}</h2>
                <div className='flex justify-center items-center gap-5 text-center md:flex-row flex-col'>
                {features.map((feature, index) => (
                    <div key={index} className=' '>
                        <img className='m-auto py-8' src={feature.img} alt='feature'/>
                        <h3 className='text-[#735335] mb-5'>{feature.title}</h3>
                        <p className='px-7 text-[#898989]'>{feature.description}</p>
                    </div>


                    ))
                }
                </div>

        </div>
    )
}
export default OurFeatures;