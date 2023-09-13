import {  Link } from "react-router-dom";
/* import Header from '../../components/Header' */


export default function Error() {
	return (
        <div>
        <h2>404 - Not Found</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
	)
}