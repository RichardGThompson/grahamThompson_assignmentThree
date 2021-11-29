import './styles.css';
import { useParams } from "react-router-dom";
import {useEffect, useState, useContext} from 'react';
import CarsContext from '../../context/carsContext';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SwiperCore, {Pagination} from 'swiper';
import {FaTachometerAlt, FaPalette} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

SwiperCore.use([Pagination]);

export const CarPage = (props) => {
    const {id} = useParams();

    const carsContext = useContext(CarsContext);

    const [car, setCar] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        const car = carsContext.cars.find((car) => car.id.stringValue === id);

        setCar(car);
    }, [carsContext.cars, id]);

    if(car){
        const carImages = car.images.arrayValue.values;
        return(
            <div className="car-page-wrapper">
                <div className="car-info-container">
                    <h1>{car.year.integerValue} {car.make.stringValue} {car.model.stringValue}</h1>
                    <div className="details-container">
                        <span>
                            <FaTachometerAlt/>
                            <p>{car.km.integerValue}km</p>
                        </span>

                        <span>
                            <FaPalette/>
                            <p>{car.color.stringValue}</p>
                        </span>
                    </div>

                    <div className="description-container">
                        <p>{car.description.stringValue}</p>
                        <h3>{`Price: ${car.price.integerValue}`}</h3>
                    </div>
                    
                </div>

                <div className="car-image-container">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={25}
                        centeredSlides={true}
                        pagination={{"clickable": true}}
                    >
                        {carImages.map( function(image) {
                            return(
                            <SwiperSlide>
                                <img src={image.stringValue} alt="" />
                            </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className="car-page-wrapper">
                <h1>Car Not Found.</h1>
            </div>
        )
    }
}