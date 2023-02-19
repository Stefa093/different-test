import React from 'react'

const Gallery = () => {
  return (
    <section>
      <div className='grid grid-cols-2'>
        <h3 className='title-section-template pt-5'>Gallery</h3>
        <p className='title-section-side cursor-pointer text-right pt-5'>See all</p>
      </div>
      <div className='grid grid-cols-6 gap-2'>
        <img className='col-start-1 col-end-4 cursor-pointer pics' src="../images1/photo.png" alt="" />
        <img className='col-start-4 col-end-7 cursor-pointer pics' src="../images1/photo1.png" alt="" />
        <img className='col-start-1 col-end-3 cursor-pointer pics' src="../images1/photo2.png" alt="" />
        <img className='col-start-3 col-end-5 cursor-pointer pics' src="../images1/photo3.png" alt="" />
        <img className='col-start-5 col-end-7 cursor-pointer pics' src="../images1/photo4.png" alt="" />
      </div>
    </section>
  )
}

export default Gallery