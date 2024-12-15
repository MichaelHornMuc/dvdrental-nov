import React from 'react'

const Modal = ({ showModal, setShowModal }) => {
  
  return (
    <div
      className={
        showModal
          ? 'modal'
          : { display: 'none' }
      }></div>
  )
}

export default Modal
