import React from 'react'

type Props = {
  folder: string,
  handleClick: () => void
}

const Header = ({folder, handleClick}: Props) => {
  return (
    <header>
      <i onClick={handleClick} className='bx bx-chevron-left arrow-1'></i>
      <img className='block object-cover w-full' src={`../${folder}/main.png`} alt="main-photo" />
    </header>
  )
}

export default Header