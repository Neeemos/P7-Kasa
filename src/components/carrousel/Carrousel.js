import Arrow from '../../assets/arrowDown.svg';
import { useState } from 'react';
import '../carrousel/Carrousel.scss';


export default function Slide({ tabImage }) {
    const [image, setImage] = useState(0);

    const nextSlide = () => {
        setImage((image + 1) % tabImage.length);
    };

    const prevSlide = () => {
        setImage((image - 1 + tabImage.length) % tabImage.length);
    };

   
    
    
    return (
        <section className='carrousel'>
            {tabImage && tabImage.length > 0 ? (
                <>
                    <img className="carrousel__background" src={tabImage[image]} alt="Photodu logement" />
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
                    )}
                </>
            ) : null}
        </section>
    );
}
