import React from 'react'
import interests from '../utils/interests.js'

type MapParameter = {
    id:number, 
    text: string, 
    highlighted: boolean
}

const Interests = () => {
  return (
    <div>
        <h3 className='text-2xl mt-4 font-semibold'>Interest</h3>
        <ul className='grid grid-cols-3'>
            {
                interests.map(({id, text, highlighted} : MapParameter)=> {
                    if (highlighted) {
                        return <li className='highlighted-type' key={id}><i className='bx bx-check-double'></i>{text}</li>
                    } else {
                        return <li key={id} className='text-2xl'>{text}</li>
                    }                    
                })
            }
        </ul>

    </div>
  )
}

export default Interests