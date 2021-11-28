import './styles.css';
import {FaTachometerAlt, FaPalette} from 'react-icons/fa';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SwiperCore, {Pagination} from 'swiper';

SwiperCore.use([Pagination]);

export const CarCard = (props) => {
    
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
                <span className="make-model"><h3><strong>{props.year} {props.make}</strong> {props.model}</h3></span>
                <div className="details">
                    <p><strong><FaTachometerAlt/> {props.km}km</strong></p>
                    <p><strong><FaPalette/> {props.color}</strong></p>
                </div>
            </div>
            <div className="button-container">
                <a href="#" className="btn">View Car</a>
            </div>
        </div>
    );
}