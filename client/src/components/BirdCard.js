// child component of InfoContainer.js
import React, { useState } from 'react'
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
                    <h4>{bird.name}</h4>

                </div>
                <Modal
                    isOpen={toggleModal}
                    ariaHideApp={false}
                    contentLabel="Bird Details"
                >
                    <BirdDetail selected={selected} closeModal={closeModal}/>
                </Modal>
            </div>
        </div>
    )
}

export default BirdCard;

