import React from 'react'
import ContactHeroComp from '../Components/ContactUs/ContactHeroComp'
import ContactInfoComp from '../Components/ContactUs/ContactInfoComp'
import ContactQuestionComp from '../Components/ContactUs/ContactQuestionComp'
import ContactFaqComp from '../Components/ContactUs/ContactFaqComp'

const Contact = () => {
  return (
    <div className='max-w-[1360px] mx-auto'>
    <ContactHeroComp />
    <ContactInfoComp />
    <ContactQuestionComp />
    <ContactFaqComp />
    </div>
  )
}

export default Contact
