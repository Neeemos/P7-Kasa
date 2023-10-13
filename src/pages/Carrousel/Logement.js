import { useParams, useNavigate } from "react-router-dom";
import {useEffect, useState } from 'react';
import API_URLS from '../../services/api';
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



      return (
        <div>
          {logementsData ? ( 
            `${logementsData.id} ${logementsData.title} ${logementsData.description}`
          ) : (
            'Loading...' 
          )}
        </div>
      );
    }
