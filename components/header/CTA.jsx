
import React from 'react'
import KAMILABUCV from '../../assets/KAMILABUCV.docx'


const CTA = () => {
  return (
    <div className='cta'>
    <a href={KAMILABUCV} download className='btn'>Download  CV</a>
    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      
    </div>
  )
}

export default CTA
