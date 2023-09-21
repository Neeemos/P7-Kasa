import { Link } from "react-router-dom";
import './Error.scss';



export default function Error() {
  return (
    <div className='error'>
      <div className="error__card">
        <h1 className='error__card__title'>404</h1>
        <p className='error__card__text'>La page que vous recherchez n'existe pas.</p>
      </div>
      <Link className='error__card__link' to='/'>Retourner sur la page d'accueil</Link>
    </div>
  )
}