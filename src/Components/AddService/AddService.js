import React from 'react';
import'./AddService.css'
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit,reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert("Successfully Added");
                    reset();
            };
        })
    };
    return (
        <div className="add-service">
            <h2 className='text-center'>Please Add A Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("services", { required: true, maxLength: 100 })} placeholder='Service Name' />
      <input {...register("duration")} placeholder='Service Duration' />
      <input type="number" {...register("rating")} placeholder='Customer Rating' />
      <input {...register("country")} placeholder='Country' />
      <input  {...register("img")} placeholder='Image URL' />
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddService;