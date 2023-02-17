import React from 'react'
import information from '../utils/Information'

const Information = () => {

  return (
    <section>
        <header className='grid grid-cols-2 gap-x-20 mb-5'>
            <h1 className='text-4xl font-semibold w-max'>
                {information.name.firstName} {information.name.lastName}, {information.age}
            </h1>
            <div className='w-12 text-5xl cursor-pointer text-red-500'>
                <i className='bx bx-paper-plane'></i>
            </div>
            <h2 className='text-section'>{information.profession}</h2>
        </header>
        <article>
            <h3 className='title-section-template'>Location</h3>
            <div className='text-red-500'>
                <i className='bx bx-map'></i>
                {information.location.proximity}
            </div>
            <p className='text-section'>{information.location.city}, {information.location.state} {information.location.country}</p>
        </article>
        <article>
            <h3 className='title-section-template'>About</h3>
            <p className='text-section'>{information.about}</p>
            <span className='title-section-side'>Read more</span>
        </article>
    </section>
  )
}

export default Information