import './styles.css';
import {useForm} from 'react-hook-form';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {useNavigate} from 'react-router-dom';


export const AddCar = (props) => {
    const {register, handleSubmit} = useForm();
    let navigate = useNavigate();

    const addCarToDB = async(data) => {
        let formattedImages = {values: []};

        for (let index = 0; index < data.images.length; index++) {
            formattedImages.values.push({stringValue: data.images[index]});
        }
        
        const formattedData = {
            fields: {
                id: {
                    stringValue: data.id
                },
                make: {
                    stringValue: data.make
                },
                model: {
                    stringValue: data.model
                },
                year: {
                    integerValue: parseInt(data.year)
                },
                color: {
                    stringValue: data.color
                },
                km: {
                    integerValue: parseInt(data.km)
                },
                price: {
                    integerValue: parseInt(data.price)
                },
                description: {
                    stringValue: data.description
                },
                images:
                    {
                        arrayValue: formattedImages
                    },
            }
        }

        try{
            const response = await fetch(process.env.REACT_APP_API_ENDPOINT, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(formattedData)
            });
            console.log(response);
            navigate('/');
        }
        catch(error){
            console.log(error);
        }
    }
    
    const onSubmit = (data) => {
        // Make the images into an array by delimiting by comma.
        const imageArray = data.carImages.split(',');
        console.log("Console Log: ~ file: index.jsx ~ line 38 ~ onSubmit ~ imageArray", imageArray);
        const payload = {
            id: uuidv4(),
            make: data.carMake,
            model: data.carModel,
            year: data.carYear,
            color: data.carColor,
            km: data.carKm,
            price: data.carPrice,
            description: data.carDescription,
            images: imageArray
        };
        addCarToDB(payload);
    }

    return(
        <div className="add-car-container">
            <h1>Add a New Car!</h1>
            <p>Fill out the following details to add a car.</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="add-form">
                    <span className="input-container">
                        <label htmlFor="carMake">Make</label>
                        <input {...register("carMake", {required: true, maxLength: 20})}/>
                    </span>
                    
                    <span className="input-container">
                        <label htmlFor="carModel">Model</label>
                        <input {...register("carModel", {required: true, maxLength: 20})}/>
                    </span>
                    
                    <span className="input-container">
                        <label htmlFor="carYear">Year</label>
                        <input {...register("carYear", {required:true, maxLength:4})} />
                    </span>

                    <span className="input-container">
                        <label htmlFor="carColor">Color</label>
                        <input {...register('carColor', {required: true, maxLength:50})} />
                    </span>

                    <span className="input-container">
                        <label htmlFor="carKm">Odometer (km)</label>
                        <input type="textbox" {...register('carKm', {required: true, maxLength: 10})} />
                    </span>

                    <span className="input-container">
                        <label htmlFor="carPrice">Price</label>
                        <input type="textbox" {...register('carPrice', {required: true, maxLength: 10})} />
                    </span>

                    <span className="input-container">
                        <label htmlFor="carDescription">Description</label>
                        <input {...register('carDescription', {required: true, maxLength:4000})}/>
                    </span>

                    <span className="input-container">
                        <label htmlFor="carImages">Image URLs (separate with comma)</label>
                        <input {...register('carImages', {required: true, maxLength: 2048})}/>
                    </span>
                </div>
                

                <span className="form-button-container">
                    <input type="submit" value="Add Car"/>
                </span>
            </form>
        </div>
    )
}