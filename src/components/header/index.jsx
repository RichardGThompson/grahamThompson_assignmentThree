import './styles.css';
import Logo from '../../images/placeholder_logo.png';

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
                        <a href="#">Add a Car</a>
                    </li>
                </ul>
                
            </div>
        </div>
    )
}