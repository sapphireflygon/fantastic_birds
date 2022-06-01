import React, {useState, useEffect} from 'react'

const BackToTopButton = () => {

    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTop(true)
            } else {
                setBackToTop(false)
            };
        })
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div>
            {backToTop && (
                <button className='btt-btn' onClick={scrollUp}>▲</button>
            )}
        </div>
    )
}

export default BackToTopButton;