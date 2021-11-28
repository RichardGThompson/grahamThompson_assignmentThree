import './styles.css';
import {OptionElem} from './optionElem';
import React, {useEffect, useState, useContext} from 'react';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
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

    const getCars = async() => {
        try{
            const response = await fetch('https://firestore.googleapis.com/v1/projects/assignmentthree-8ce66/databases/(default)/documents/cars/');
            const data = await response.json();

            const formattedData = data.documents.map( (item) => {
                return item.fields;
            });
            
            setCars(formattedData);
            setFilteredCars(formattedData);
            carsContext.initCars(formattedData);
            setLoadingState(false);
            console.log(formattedData);
        }
        catch(err){

        }
    }
    
    return(
        <div className="home-page-container">
            <div className="homepage-title-container">
                <h1>New and Pre-Owned Cars</h1>
                <p>Browse our new and pre-owned cars!</p>
            </div>
            <div className="homepage-body">
                <div className="filter-sidebar">
                    <div className="condition-container filter-element">
                        <h2>Condition</h2>
                        {/* Checkboxes to select the condition of the vehicle */}
                        <span className="input-span">
                            <input type="checkbox" id='condition-new' name="condition-new" value="New" />
                            <label htmlFor="condition-new" className="condition-label">New</label>
                        </span>

                        <span>
                            <input type="checkbox" id='condition-used' name="condition-used" value="Pre-Owned" />
                            <label htmlFor="condition-used" className="condition-label">Pre-Owned</label>
                        </span>
                    </div>

                    <div className="year-container filter-element">
                        <h2>Model Year</h2>

                        <div className="year-selection-container">
                            <span>
                                <label htmlFor="year-min">Min. Model Year</label>
                                <select name='year-min' id='year-min'>
                                    {years.map((year) => <OptionElem year={year}/>)}
                                </select>
                            </span>

                            <span>
                            </span>

                            <span id='max-year-container'>
                                <label htmlFor="year-max">Max. Model Year</label>
                                <select name='year-max' id='year-max'>
                                    {years.map((year) => <OptionElem year={year}/>)}
                                </select>
                                
                            </span>
                        </div>
                    </div>
                </div>
                <div className="results-container">
                    {filteredCars.map( (car) => <CarCard year={car.year.integerValue} make={car.make.stringValue} model={car.model.stringValue} images={car.images.arrayValue.values} description={car.description.stringValue} km={car.km.integerValue} color={car.color.stringValue}/>)}
                </div>
            </div>
        </div>
        
    );
}