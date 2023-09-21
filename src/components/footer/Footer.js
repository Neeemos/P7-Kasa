import './Footer.scss';
import footerLogo from '../../assets/footerLogo.svg';

export default function Footer() {
    return (
        <footer className='footer'>
            <img className='footer__logo' src={footerLogo} alt="Kasa - agence de location d'appartements entre particuliers" />
            <p className='footer__copyright'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )

}

