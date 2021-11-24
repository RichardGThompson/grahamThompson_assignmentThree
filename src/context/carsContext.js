import React, {useState} from 'react';

const CarsContext = React.createContext({
    cars: [],
    initCars: () => {},
    addSavedCar: () => {},
});

export const CarsContextProvider = (props) => {
    const [cars, setCars] = useState([]);
    const [savedCars, saveCar] = useState([]);

    
    /**
    * Summary.  Initialize the list of cars from the data returned from the API
    *
    * @since    0.1.0
    *
    * @param    {array} carsFromApi   Array of cars returned from the API
    */
    const initCars = (carsFromApi) => {        
        setCars(carsFromApi);
    }

    /**
    * Summary.  Allows the program to add a save to the user's saved cars list.
    *
    * @since    0.1.0
    *
    * @param    {number}    carID   Pass the ID of the car from the API to add to the users list of saved cars.
    */
    const addSavedCar = (carID) => {
        let tmpList = savedCars;
        tmpList.push(carID);
        saveCar(tmpList);
    }
    
    return (<CarsContext.Provider
     value={{cars: cars, initCars: initCars, addSavedCar: addSavedCar}}
    >
        {props.children}
    </CarsContext.Provider>)
}

export default CarsContext;