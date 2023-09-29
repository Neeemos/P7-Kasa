import './Banner.scss';
import { useLocation } from "react-router-dom";
//import BannerImg from '../../assets/banner.jpg';


export default function Header() {
  const location = useLocation();
  return (
    <section className={location.pathname !== '/about' ? 'banner' : 'banner__about'}>
      {location.pathname !== '/about' ? <p className='banner__text'>Chez vous, partout et ailleurs</p> : '' }
    </section>

  )

}

