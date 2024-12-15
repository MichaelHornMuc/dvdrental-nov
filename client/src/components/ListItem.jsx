import React, { useEffect, useState } from 'react'

const ListItem = ({ data, showModal, setShowModal }) => {
  // let imageArray = [{freeboy}, {explorer}, {pirate}]
  // const getRandomIndex = () =>Math.floor(Math.random()* imageArray.length)
  // const [randomImage, setRandomImage] = useState(getRandomIndex())

  // useEffect(() => {
  //   getRandomIndex()
  // }, [])

  // console.log(imageArray[randomImage])
  const handleKlick = () => {
    
    setShowModal(!showModal)
  }


 
  return (
    <div className='list-item' onClick={handleKlick}>
      {/* <img src={randomImage} alt="" className='freepiks' /> */}
      <article>
        <p>{data.first_name}</p>
      </article>
    </div>
  )
}

export default ListItem
