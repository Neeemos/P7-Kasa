import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import API_URLS from '../../services/api';
import Carrousel from '../../components/carrousel/Carrousel.js';
import Dropdown from '../../components/dropdown/Dropdown.js';
import './Logement.scss';
import Star from '../../components/star/Star.js';



export default function Accomodation() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [logementsData, setLogementsData] = useState({});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');


  useEffect(() => {
    fetch(API_URLS.logements)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const filteredLogement = data.find(item => item.id === id);
        if (filteredLogement) {
          setLogementsData(filteredLogement);

          if (filteredLogement.host.name) {
            const fullName = filteredLogement.host.name;
            const [first, ...lastArray] = fullName.split(' ');
            setFirstName(first);
            setLastName(lastArray.join(''));
          }
        } else {
          navigate('/error');
        }
      })
      .catch((error) => {
        navigate('/error');
      });
  }, [id, navigate]);

  const rating = logementsData.rating;

  return (
    <main>
      {logementsData.pictures ? (
        <>
          <Carrousel tabImage={logementsData.pictures} />
          <section className="logement">
            <div className="logement__information information">
              <div className="information__appartement appartement">
                <h1 className="appartement__title">{logementsData.title}</h1>
                <h2 className="appartement__location">{logementsData.location}</h2>
                <ul className="appartement__tags tags">
                  {logementsData.tags.map((tag, index) => {
                    return (
                      <li className="tags__item" key={index}>{tag}</li>
                    )
                  })}
                </ul>
              </div>
              <div className='information__host host'>
                <div className="host__block">
                  <div className='host__name'>
                    <span>{firstName}</span>
                    <span>{lastName}</span>
                  </div>
                  <img className="host__image" src={logementsData.host.picture} alt="Propriétaire du logement" />
                </div>
                <div className="host__stars">
                  {[...Array(5)].map((star, index) => {
                    const ratingIndex = index + 1;
                    const starClassName = ratingIndex <= rating ? 'star__full' : 'star__empty';

                    return (
                      <Star key={index} className={starClassName} />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="logement__description description">
              <Dropdown className="description__menu" title="Description" content={logementsData.description} />
              <Dropdown className="description__menu" title="Equipements" content={logementsData.equipments} />

            </div>
          </section>
        </>
      ) : (
        'Loading...'
      )}
    </main>
  );
}
