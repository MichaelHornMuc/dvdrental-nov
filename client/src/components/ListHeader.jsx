import React,{useState} from 'react'


const ListHeader = ({ listname, showModal, setShowModal }) => {
  
  const displayModal = () => {
    setShowModal(!showModal)
  }

  return (
    <div className='list-header'>
      <p>{listname}</p>
      <div className='btn-container'>
        <button className='btn create' onClick={() => displayModal()}>
          ADD NEW CUSTOMER
        </button>
        <button className='btn signout'>SIGN OUT</button>
      </div>
      {/* {showModal && (
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Modal showModal={showModal} setShowModal={setShowModal} />
        </div>
      )} */}
    </div>
  )
}

export default ListHeader
