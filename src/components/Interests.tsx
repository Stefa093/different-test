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
        <h3 className='title-section-template pt-4'>Interests</h3>
        <ul className='grid grid-cols-3 gap-3'>
            {
                interests.map(({id, text, highlighted} : MapParameter)=> {
                    if (highlighted) {
                        return <li className='highlighted-type py-1' key={id}><i className='bx bx-check-double'></i> {text}</li>
                    } else {
                        return <li key={id} className='text-sm border-2 rounded-md border-gray-200 text-center py-1'>{text}</li>
                    }                    
                })
            }
        </ul>
    </div>
  )
}

export default Interests