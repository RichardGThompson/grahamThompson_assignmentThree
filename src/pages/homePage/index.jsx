import './styles.css';
import React, {useEffect, useState, useContext} from 'react';
import CarsContext from '../../context/carsContext';
import {CarCard} from '../../components/carCard';


export const HomePage = (props) => {
    const carsContext = useContext(CarsContext);

    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);
    const [loading, setLoadingState] = useState(true);

    const yearRange = [2010, 2021];
    let years = [];
    for (let index = yearRange[0]; index <= yearRange[1]; index++) {
        years.push(index);
    }

    useEffect( () => {
        getCars();
    }, []);

    console.log(carsContext.savedCars);

    const getCars = async() => {
        try{
            console.log("Polling API...");
            const response = await fetch(process.env.REACT_APP_API_ENDPOINT);
            const data = await response.json();

            const formattedData = data.documents.map( (item) => {
                return item.fields;
            });

            
            setCars(formattedData);
            setFilteredCars(formattedData);
            carsContext.initCars(formattedData);
            setLoadingState(false);
        }
        catch(err){
            console.log("Console Log: ~ file: index.jsx ~ line 41 ~ getCars ~ err", err);
        }
    }

    if(!loading){
        return(
                <div className="home-page-container">
                    <div className="homepage-title-container">
                        <h1>New and Pre-Owned Cars</h1>
                        <p>Browse our new and pre-owned cars!</p>
                    </div>
                    <div className="homepage-body">
                        <div className="results-container">
                            {filteredCars.map( (car) => <CarCard id={car.id.stringValue} year={car.year.integerValue} make={car.make.stringValue} model={car.model.stringValue} images={car.images.arrayValue.values} km={car.km.integerValue} price={car.price.integerValue} color={car.color.stringValue}/>)}
                        </div>
                    </div>
                </div>
                
            );
    }
    else{
        return(
            <div className="home-page-container">
                <h1>Loading...</h1>
            </div>
        )
    }
    
    
}