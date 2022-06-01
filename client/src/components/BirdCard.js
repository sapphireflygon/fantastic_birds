// child component of InfoContainer.js
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'

import BirdDetail from './BirdDetail';


const BirdCard = ({bird}) => {

    const [selected, setSelected] = useState('')
    const [toggleModal, setToggleModal] = useState(false);

    useEffect(() => {
        if (toggleModal) {
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
                    style={{
                        content: {
                            top: "7%",
                            left:"7%",
                            right: "7%",
                            bottom: "7%"}
                    }}
                >
                    <BirdDetail selected={selected} closeModal={closeModal}/>
                </Modal>
            </div>
        </div>
    )
}

export default BirdCard;

