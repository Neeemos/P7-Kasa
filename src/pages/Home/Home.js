import Banner from '../../components/banner/Banner';
import { Link } from 'react-router-dom';
import './Home.scss';
import React, { useEffect, useState } from 'react';
import API_URLS from '../../services/api';
export default function Home() {
	const [logementsData, setLogementsData] = useState([]);

	useEffect(() => {
		fetch(API_URLS.logements)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				setLogementsData(data);
			})
			.catch((error) => {
				console.error('Error fetching JSON:', error);
			});
	}, []);
	return (
		<div className='Home'>
			<Banner />
			<section className='cards'>
				{logementsData.map((logement) => (
					<Link to={`/${logement.id}`} className="cards__link" key={logement.id}>
						<img className="cards__img" src={logement.cover} alt={logement.description} />
						<h3 className="cards__title">{logement.title}</h3>
					</Link>
				))}
			</section>
		</div>

	)
}