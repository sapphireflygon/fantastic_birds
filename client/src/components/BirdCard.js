// child component of InfoContainer.js
import React, { useState } from 'react'
import data from './data/Data';
import Modal from 'react-modal'

import BirdCardList from './BirdCardList';
import BirdDetail from './BirdDetail';

const BirdCard = ({bird}) => {

    console.log(bird) // DELETE
    const [selected, setSelected] = useState('')
    const [toggleModal, setToggleModal] = useState(false);

    const showModal = (bird) => {
        setSelected(bird)
        setToggleModal(true)
    };

    const closeModal = () => {
        setSelected('')
        setToggleModal(false)
    }

    // const birdSelect = () => {
    //     setBirds(data)
        
    // }
    // console.log(birdSelect) // DELETE


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
                <div className='flip-card-back'>
                    <h4 onClick={showModal}>{bird.name}</h4>

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

