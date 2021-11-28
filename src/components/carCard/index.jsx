import './styles.css';
import {FaTachometerAlt, FaPalette} from 'react-icons/fa';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SwiperCore, {Pagination} from 'swiper';
import {NavLink} from 'react-router-dom';

SwiperCore.use([Pagination]);

export const CarCard = (props) => {

    const {id, year, make, model, images, description, km, color} = props;
    
    return(
        <div className="carCard">
            <div className="car-images">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={25}
                    centeredSlides={true}
                    pagination={{"clickable": true}}
                >
                    {props.images.map( function (carImage) {
                        return(
                           <SwiperSlide>
                                <img src={carImage.stringValue} alt="" />
                            </SwiperSlide> 
                        );
                    })}
                </Swiper>
                
            </div>
            <div className="car-info-container">
                <span className="make-model"><h3><strong>{year} {make}</strong> {model}</h3></span>
                <div className="details">
                    <p><strong><FaTachometerAlt/> {km}km</strong></p>
                    <p><strong><FaPalette/> {color}</strong></p>
                </div>
            </div>
            <div className="button-container">
                {/* <NavLink className="btn" to={`/car/${id}`} >View Car</NavLink> */}
                <NavLink className="btn" to={{
                    pathname: `/car/${props.id}`,
                    state: {id: {id}
                    }
                }}>View Car</NavLink>
                {/* <a href="#" className="btn">View Car</a> */}
            </div>
        </div>
    );
}