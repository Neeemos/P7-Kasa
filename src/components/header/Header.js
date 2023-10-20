import '../header/Header.scss';
import '../../sass/styles.scss';
import { Outlet, Link, useLocation } from "react-router-dom";
import Logo from '../../assets/logo.svg'


export default function Header() {
  const location = useLocation();
  return (
    <main>
      <header className='header'>
        <h1>
          <img className="header__logo" src={Logo} alt="kasa, location d'appartements" />
        </h1>
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
      <Outlet />
    </main>

  )

}

