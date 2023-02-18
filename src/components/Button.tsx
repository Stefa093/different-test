import React from 'react'

const Button = () => {
  return (
    <section className='absolute -top-12 flex justify-center text-[60px] gap-6 left-0 right-0'>
      <button><i className='bx bx-x'></i></button>
      <button><i className='bx bxs-heart'></i></button>
      <button><i className='bx bxs-star'></i></button>
    </section>
  )
}

export default Button