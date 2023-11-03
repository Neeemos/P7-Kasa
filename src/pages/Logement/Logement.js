import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import API_URLS from '../../services/api';
import Carrousel from '../../components/carrousel/Carrousel.js';
import Dropdown from '../../components/dropdown/Dropdown.js';
import fullStar from '../../assets/redStar.png';
import emptyStar from '../../assets/Star.png';
import './Logement.scss';

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
            <div className="logement__information">
              <div className="logement__information__appartement">
                <h1 className="logement__information__appartement__title">{logementsData.title}</h1>
                <h2 className="logement__information__appartement__location">{logementsData.location}</h2>
                <ul className="logement__information__appartement__tags">
                  {logementsData.tags.map((tag, index) => {
                    return (
                      <li className="logement__information__appartement__tags__item" key={index}>{tag}</li>
                    )
                  })}
                </ul>
              </div>
              <div className='logement__information__host'>
                <div className='logement__information__host__name'>
                  <span>{firstName}</span>
                  <span>{lastName}</span>
                </div>
                <img className="logement__information__image" src={logementsData.host.picture} alt="Propriétaire du logement" />
                <div className="logement__information__stars">
                  {[...Array(5)].map((star, index) => {
                    const ratingIndex = index + 1;
                    return (
                      <img  key={index} src={ratingIndex <= rating ? fullStar : emptyStar} alt="star" />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="information">
              <div className="information__menu">
                <Dropdown className="information__dropdown" title="Description" content={logementsData.description} />
              </div>
              <div className="information__menu">
                <Dropdown className="information__dropdown" title="Equipements" content={logementsData.equipments} />
              </div>
            </div>
          </section>
        </>
      ) : (
        'Loading...'
      )}
    </main>
  );
}
