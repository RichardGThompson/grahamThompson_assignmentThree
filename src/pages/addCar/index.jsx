import './styles.css';
import {useForm} from 'react-hook-form';
import React, {useEffect} from 'react';
import {getDatabase} from 'firebase/database';
import {collection, addDoc, getFirestore} from 'firebase/firestore';


export const AddCar = (props) => {
    const {register, handleSubmit} = useForm();
    


    const addCarToDB = async(data) => {
        try {
            const db = getFirestore();
            // Add a new document with a generated id.
            const docRef = await addDoc(collection(db, "cars"), {
                make: data.make,
                model: data.model,
                year: parseInt(data.year),
                color: data.color,
                km: parseInt(data.km),
                description: data.description,
                images: data.images

            });
            console.log("Document written with ID: ", docRef.id);
        } 
        catch (e) {
            console.error("Error adding document: ", e);
        }
    }


    // useEffect( () => {
    //     testDocWrite();
    // }, []);
    
    
    const onSubmit = (data) => {
        // Make the images into an array by delimiting my comma.
        const imageArray = data.carImages.split(',');
        console.log("Console Log: ~ file: index.jsx ~ line 38 ~ onSubmit ~ imageArray", imageArray);
        const payload = {
            make: data.carMake,
            model: data.carModel,
            year: data.carYear,
            color: data.carColor,
            km: data.carKm,
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
                <label htmlFor="carMake">Make</label>
                <input {...register("carMake", {required: true, maxLength: 20})}/>

                <label htmlFor="carModel">Model</label>
                <input {...register("carModel", {required: true, maxLength: 20})}/>

                <label htmlFor="carYear">Year</label>
                <input {...register("carYear", {required:true, maxLength:4})} />

                <label htmlFor="carColor">Color</label>
                <input {...register('carColor', {required: true, maxLength:50})} />

                <label htmlFor="carKm">Odometer (km)</label>
                <input {...register('carKm', {required: true, maxLength: 10})} />

                <label htmlFor="carDescription">Description</label>
                <input {...register('carDescription', {required: true, maxLength:1024})}/>

                <label htmlFor="carImages">Image URLs (separate with comma)</label>
                <input {...register('carImages', {required: true, maxLength: 2048})}/>
                <input type="submit" />
            </form>
        </div>
    )
}