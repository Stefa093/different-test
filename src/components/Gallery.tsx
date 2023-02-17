import React from 'react'

const Gallery = () => {
  return (
    <section>
      <div className='grid grid-cols-2'>
        <h3 className='title-section-template'>Gallery</h3>
        <p className='title-section-side'>See all</p>
      </div>
      <div className='grid grid-cols-3'>
        <img src="../images1/photo.png" alt="" />
        <img src="../images1/photo1.png" alt="" />
        <img src="../images1/photo2.png" alt="" />
        <img src="../images1/photo3.png" alt="" />
        <img src="../images1/photo4.png" alt="" />
      </div>
    </section>
  )
}

export default Gallery