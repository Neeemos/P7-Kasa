import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import API_URLS from '../../services/api';
import Carrousel from '../../components/carrousel/Carrousel'
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
        console.log(data);
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

  return (
    <>
      {logementsData.pictures ? (
        <>
          <Carrousel tabImage={logementsData.pictures} />
          <main className="logement">
            <div className="logement__information">
              <h1 className="logement__information__title">{logementsData.title}</h1>
              <h3 className="logement__information__location">{logementsData.location}</h3>
            </div>
            <div className="information">
              <div className="information__menu">
                <Dropdown className={"information__dropdown"} title="Description" content={logementsData.description} />

              </div>
              <div className="information__menu">
                <Dropdown className={"information__dropdown"} title="Equipements" content={logementsData.equipments} />
              </div>
            </div>
          </main>
        </>
      ) : (
        'Loading...'
      )}
    </>
  );
}

