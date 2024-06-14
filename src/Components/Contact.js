import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { useState } from 'react';
const Contact=()=>{
    const [selectedLanguage, setSelectedLanguage] = useState(i18next.language);
    const {t}=useTranslation();
    return(
        <div className="bg-gradient-to-b w-full from-[#735335] to-[#171717] h-72 flex flex-col justify-center items-center gap-8">
<h2>{t('ContactUs')}</h2>
<p className='text-[#898989] px-5'>{t('contactUsP')}</p>
<div className={`flex gap-4 ${selectedLanguage === 'ar' ? 'sm:flex-row-reverse' : 'sm:flex-row'} sm:flex-row flex-col`}>
    <input placeholder='Your Email' className='rounded-sm py-3 px-6 text-left w-72'/>
    <button type="buuton" className='bg-lightBrown text-white rounded-sm px-4 py-2'>SUBSCRIBE</button>
</div>
        </div>
    )
}

export default Contact;