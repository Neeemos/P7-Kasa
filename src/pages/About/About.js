import React, { useState } from 'react';
import Banner from '../../components/banner/Banner.js';
import './About.scss';
import ArrowDown from '../../assets/arrowDown.svg';

export default function About() {
    const [isOpen, setisOpen] = useState([false, false, false, false]);

    const toggleCollapse = (index) => {
        const newCollapseState = [...isOpen];
        newCollapseState[index] = !newCollapseState[index];
        setisOpen(newCollapseState);
    };


    return (
        <section className="about">
            <Banner />
            <div className="dropDown">
                <h3 className="dropDown__title" onClick={() => toggleCollapse(0)}> Fiabilité
                    <img className={isOpen[0] ? "dropDown__title__arrow__down" : "dropDown__title__arrow__up"} src={ArrowDown} alt="Informations sur la fiabilité" />
                </h3>
                {isOpen[0] && (
                    <div className="dropDown__content">
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                    </div>
                )}
            </div>

            <div className="dropDown">
                <h3 className="dropDown__title" onClick={() => toggleCollapse(1)}> Respect
                    <img className={isOpen[1] ? "dropDown__title__arrow__down" : "dropDown__title__arrow__up"} src={ArrowDown} alt="Informations sur le respect" />
                </h3>

                {isOpen[1] && (
                    <div className="dropDown__content">
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                    </div>
                )}
            </div>
            <div className="dropDown">
                <h3 className="dropDown__title" onClick={() => toggleCollapse(3)}> Service
                    <img className={isOpen[3] ? "dropDown__title__arrow__down" : "dropDown__title__arrow__up"} src={ArrowDown} alt="informations sur le service" />
                </h3>

                {isOpen[3] && (
                    <div className="dropDown__content">
                        <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                    </div>
                )}
            </div>
            <div className="dropDown">
                <h3 className="dropDown__title" onClick={() => toggleCollapse(4)}> Securité
                    <img className={isOpen[4] ? "dropDown__title__arrow__down" : "dropDown__title__arrow__up"} src={ArrowDown} alt="informations sur la securité" />
                </h3>

                {isOpen[4] && (
                    <div className="dropDown__content">
                        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                    </div>
                )}
            </div>

        </section>
    )
}