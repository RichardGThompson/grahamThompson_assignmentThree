import './styles.css';
import {FaTachometerAlt, FaPalette} from 'react-icons/fa';



export const CarCard = (props) => {
    
    return(
        <div className="carCard">
            <div className="car-images">
                <img src={props.images[0].stringValue} alt="" />
            </div>
            <div className="car-info-container">
                <span className="make-model"><h3><strong>{props.year} {props.make}</strong> {props.model}</h3></span>
                <div className="details">
                    <p><strong><FaTachometerAlt/> {props.km} km</strong></p>
                    <p><strong><FaPalette/> {props.color}</strong></p>
                </div>
            </div>
            <div className="button-container">
                <a href="#" className="btn">View Car</a>
            </div>
        </div>
    );
}