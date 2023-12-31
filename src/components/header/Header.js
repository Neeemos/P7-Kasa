import '../header/Header.scss';
import '../../sass/styles.scss';
import {  Link, useLocation } from "react-router-dom";
import Logo from '../../assets/logo.svg'


export default function Header() {
  const location = useLocation();
  return (
    <header className='header'>
      <figure>
        <img className="header__logo" src={Logo} alt="kasa, location d'appartements" />
      </figure>
      <nav className='headerBar'>
        <ul className='headerBar__list'>
          <li className={location.pathname === '/' ? 'headerBar__list__active' : 'headerBar__list'}>
            <Link to="/" className='headerBar__text'>Home</Link>
          </li>
          <li className={location.pathname === '/about' ? 'headerBar__list__active' : 'headerBar__list'}>
            <Link to="/about" className='headerBar__text'>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )

}

