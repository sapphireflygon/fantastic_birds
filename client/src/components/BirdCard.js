// child component of InfoContainer.js
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'

import BirdDetail from './BirdDetail';

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.75)'
        },
        content: {
        position: 'absolute',
        top: '40px',
        left: '40px',
        right: '40px',
        bottom: '40px',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px'
    }
    }

const BirdCard = ({bird}) => {

    const [selected, setSelected] = useState('')
    const [toggleModal, setToggleModal] = useState(false);

    useEffect(() => {
        if (toggleModal) {
            console.log(document.body.style.overflow)
          document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'scroll'
        }
      }, [toggleModal])

    const showModal = () => {
        setSelected(bird)
        setToggleModal(true)
    };

    const closeModal = () => {
        setSelected('')
        setToggleModal(false)
    }

    return (
        <div className='bird-card'>
            <div className='flip-card-inner'>
                <div className='flip-card-front'>
                    <img 
                        src={bird.cartoonimg}
                        alt={bird.name}
                        className="bird-card-img"
                    />
                </div>
                <div onClick={showModal} className='flip-card-back'>
                    <div className='bird-card-name-back'>
                        <h1>{bird.name}</h1>
                    </div>

                </div>
                <Modal
                    isOpen={toggleModal}
                    ariaHideApp={false}
                    contentLabel="Bird Details"
                    className="modal-shiz"
                >
                    <BirdDetail selected={selected} closeModal={closeModal}/>
                </Modal>
            </div>
        </div>
    )
}

export default BirdCard;

