import Banner from '../../components/banner/Banner';
import { Link } from 'react-router-dom';
import './Home.scss';
import logementsData from '../../components/data/logements.json';

export default function Home() {
console.log(logementsData);
	return (
		<div className='Home'>
			<Banner />
			<section className='cards'>
				{logementsData.map((logement, index) => (
					<Link to={`/${logement.id}`} className="cards__link" key={index}>
						<img className="cards__img" src={logement.cover} alt={logement.description} />
						<h3 className="cards__title">{logement.title}</h3>
					</Link>
				))}

			</section>
		</div>

	)
}