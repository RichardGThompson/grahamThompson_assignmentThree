import './styles.css';
import Logo from '../../images/placeholder_logo.png';
import {NavLink} from 'react-router-dom';

export const Header = (props) => {
    return(
        <div className="header">
            <div className="logo-container">
                <img src={Logo} alt="" />
            </div>
            <div className="nav-elements-container">
                <ul>
                    <li>
                        <a href="#">Saved Cars</a>
                    </li>
                    <li>
                        <NavLink to="/add-car">Add a Car</NavLink>
                    </li>
                </ul>
                
            </div>
        </div>
    )
}