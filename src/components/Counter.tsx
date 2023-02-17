import React from 'react'

type Props = {
    counter: number,
    setCounter: React.Dispatch<React.SetStateAction<number>>
}

const Counter = ({ counter, setCounter } : Props) => {


  return (
    <div>Counter</div>
  )
}

export default Counter