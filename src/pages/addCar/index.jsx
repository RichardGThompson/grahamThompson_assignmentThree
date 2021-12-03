import './styles.css';
import {useForm} from 'react-hook-form';
import React from 'react';
import {collection, addDoc, getFirestore} from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';


export const AddCar = (props) => {
    const {register, handleSubmit} = useForm();
    

    // Left this code in commented as this is the way that Google suggests the operation be done.
    // const addCarToDB = async(data) => {
    //     let _data = {
    //         id: data.id,
    //         make: data.make,
    //         model: data.model,
    //         year: parseInt(data.year),
    //         color: data.color,
    //         km: parseInt(data.km),
    //         price: data.price,
    //         description: data.description,
    //         images: data.images
    //     }

    //     try {
    //         const db = getFirestore();
    //         // Add a new document with a generated id.
    //         const docRef = await addDoc(collection(db, "cars"), {
    //             id: _data.id,
    //             make: _data.make,
    //             model: _data.model,
    //             year: parseInt(_data.year),
    //             color: _data.color,
    //             km: parseInt(_data.km),
    //             price: parseInt(_data.price),
    //             description: _data.description,
    //             images: _data.images
    //         });
    //         console.log("Document written with ID: ", docRef.id);
    //     } 
    //     catch (e) {
    //         console.error("Error adding document: ", e);
    //     }
    // }

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