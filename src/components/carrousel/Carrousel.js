import Arrow from '../../assets/arrowDown.svg';
import { useState } from 'react';
import './Carrousel.scss';
import API_URLS from '../../services/api';

export default function Slide({ tabImage }) {
    const [image, setImage] = useState(0);

    const nextSlide = () => {
        setImage((image + 1) % tabImage.length);
    };

    const prevSlide = () => {
        setImage((image - 1 + tabImage.length) % tabImage.length);
    };
    const backgroundImageStyle = {
        backgroundImage: tabImage.length > 0 ? `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${tabImage[image]})` : `url(${API_URLS.errorImg})`,
    };
   
    return (
        <section className='carrousel'>
            <div className="carrousel__background" style={backgroundImageStyle} />

            {tabImage.length > 1 && (
                <>
                    <img
                        className='carrousel__arrow carrousel__arrow__right'
                        src={Arrow}
                        alt="voir le prochain slide"
                        onClick={nextSlide}
                    />
                    <img
                        className='carrousel__arrow carrousel__arrow__left'
                        src={Arrow}
                        alt="voir le slide précédent "
                        onClick={prevSlide}
                    />
                    <p className='carrousel__number'>{image + 1} / {tabImage.length}</p>
                </>
            ) }
        </section>
    );
}