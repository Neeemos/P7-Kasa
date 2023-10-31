import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import API_URLS from '../../services/api';
import Carrousel from '../../components/carrousel/Carrousel.js';
import Dropdown from '../../components/dropdown/Dropdown.js';
import './Logement.scss';
export default function Accomodation() {
  const navigate = useNavigate();
  const [logementsData, setLogementsData] = useState([]);
  const idLogement = useParams('id').id;

  useEffect(() => {
    fetch(API_URLS.logements)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const filteredLogement = data.find(item => item.id === idLogement);
        if (filteredLogement) {
          setLogementsData(filteredLogement);
        } else {
          navigate('/error');
        }
      })
      .catch((error) => {
        navigate('/error');
      });
  }, [idLogement, navigate]);

  const redStar = (
    <path
      d="M99.7212 6.84366C99.4728 6.32809 98.9479 6 98.3714 6C97.7949 6 97.2747 6.32809 97.0216 6.84366L94.0079 13.0445L87.2775 14.0382C86.7151 14.1225 86.2464 14.5162 86.0729 15.0552C85.8995 15.5942 86.0401 16.1895 86.4432 16.5879L91.327 21.4201L90.174 28.2491C90.0803 28.8115 90.3146 29.3833 90.7786 29.7161C91.2426 30.0489 91.8566 30.0911 92.3628 29.8239L98.3761 26.6133L104.389 29.8239C104.896 30.0911 105.51 30.0536 105.974 29.7161C106.438 29.3786 106.672 28.8115 106.578 28.2491L105.421 21.4201L110.304 16.5879C110.707 16.1895 110.853 15.5942 110.675 15.0552C110.496 14.5162 110.032 14.1225 109.47 14.0382L102.735 13.0445L99.7212 6.84366Z"
      fill="#FF6060"
    />
  );

  const greyStar = (
    <path
      d="M179.721 6.84366C179.473 6.32809 178.948 6 178.371 6C177.795 6 177.275 6.32809 177.022 6.84366L174.008 13.0445L167.277 14.0382C166.715 14.1225 166.246 14.5162 166.073 15.0552C165.9 15.5942 166.04 16.1895 166.443 16.5879L171.327 21.4201L170.174 28.2491C170.08 28.8115 170.315 29.3833 170.779 29.7161C171.243 30.0489 171.857 30.0911 172.363 29.8239L178.376 26.6133L184.389 29.8239C184.896 30.0911 185.51 30.0536 185.974 29.7161C186.438 29.3786 186.672 28.8115 186.578 28.2491L185.421 21.4201L190.304 16.5879C190.707 16.1895 190.853 15.5942 190.675 15.0552C190.496 14.5162 190.032 14.1225 189.47 14.0382L182.735 13.0445L179.721 6.84366Z"
      fill="#E3E3E3"
    />
  );


  const rating = logementsData.rating;
  return (
    <main>
      {logementsData.pictures ? (
        <>
          <Carrousel tabImage={logementsData.pictures} />
          <div className="logement">
            <div className="logement__information">
              <div>
                <h1 className="logement__information__title">{logementsData.title}</h1>
                <h2 className="logement__information__location">{logementsData.location}</h2>
              </div>
              <img src={logementsData.host.picture} alt="host of this accomodation" />
              <div className="logement__information__stars">
                <svg xmlns="http://www.w3.org/2000/svg" width="196" height="36" viewBox="0 0 196 36">
                  {[...Array(5)].map((star, index) => {
                    const ratingValue = index + 1;
                    return ratingValue <= rating ? redStar : greyStar;
                  })}
                </svg>
              </div>
            </div>
            <div className="information">
              <div className="information__menu">
                <Dropdown className={"information__dropdown"} title="Description" content={logementsData.description} />
              </div>
              <div className="information__menu">
                <Dropdown className={"information__dropdown"} title="Equipements" content={logementsData.equipments} />
              </div>
            </div>
          </div>
        </>
      ) : (
        'Loading...'
      )}
    </main>
  );
}

