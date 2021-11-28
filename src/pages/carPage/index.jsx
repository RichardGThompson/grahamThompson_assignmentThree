import './styles.css';
import { useParams } from "react-router-dom";
import {useEffect, useState, useContext} from 'react';
import CarsContext from '../../context/carsContext';
import {useNavigate} from 'react-router-dom';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SwiperCore, {Pagination} from 'swiper';

SwiperCore.use([Pagination]);

export const CarPage = (props) => {
    const {id} = useParams();

    const carsContext = useContext(CarsContext);

    const [car, setCar] = useState();

    useEffect(() => {
        const car = carsContext.cars.find((car) => car.id.stringValue == id);

        setCar(car);
    }, []);

    if(car){
        const carImages = car.images.arrayValue.values;
        return(
            <div className="car-page-wrapper">
                <h1>{car.year.integerValue} {car.make.stringValue} {car.model.stringValue}</h1>

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
        );
    }
    else{
        return(
            <div className="pets-page">
                <h1 className="pets-title uppercase">No Pet Found.</h1>
            </div>
        )
    }
}