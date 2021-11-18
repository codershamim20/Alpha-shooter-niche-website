import React from 'react';
import'./AddProduct.css'
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddProduct = () => {
    const { register, handleSubmit,reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:7000/productsdata', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert("Successfully Added");
                    reset();
            };
        })
    };
    return (
        <div className="add-service">
            <h2 className='text-center'>Please Add A product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Model", { required: true, maxLength: 100 })} placeholder='Model Name' />
      <input {...register("duration")} placeholder='Warrenty Duration' />
      <input type="number" {...register("rating")} placeholder='Customer Rating' />
      <input {...register("country")} placeholder='Technology from' />
      <input  {...register("img")} placeholder='Image URL' />
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddProduct;