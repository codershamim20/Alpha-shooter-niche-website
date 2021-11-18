import React from 'react';
import'./Addreviews.css'
import { useForm } from "react-hook-form";
import axios from 'axios';
import Reviews from '../Reviews/Reviews';

const Addreviews = () => {
    const { register, handleSubmit,reset } = useForm();

    const onSubmit = data => {
        // console.log(data);
        axios.post('https://fierce-cliffs-19562.herokuapp.com/reviews', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert("Successfully Added");
                    reset();
            };
        })
    };
    return (
        <>
        <div className="add-review">
            <h2 className='text-center'>Your Review About Our Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Customer", { required: true })} placeholder='Your Name' />
      <input {...register("products", { required: true, maxLength: 100 })} placeholder='Product Name' />
      <input type="number" {...register("rating")} placeholder='Customer Rating' />
      <input {...register("message")} placeholder='Your Message' />
      <input type="submit" />
    </form>
            </div>
            
            <Reviews></Reviews>
            </>
    );
};

export default Addreviews;