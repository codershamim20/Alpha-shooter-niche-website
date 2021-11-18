import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useFirebase from '../../hooks/useFirebase';
import axios from 'axios';

const Productdetail = () => {
  const { register, handleSubmit,reset } = useForm();
  const { id } = useParams();
  const { user } = useFirebase();
    
    const [cards , setCards] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:7000/productdetail/${id}`)
            .then(res => res.json())
        .then(data=>setCards(data))
    },[id])
  const { Model, img, country, duration, rating} = cards || {}
  const onSubmit = data => {
    console.log(data);
    axios.post('http://localhost:7000/allorders', data)
        .then(res => {
            // console.log(res);
            if (res.data.insertedId) {
                alert("Successfully Ordered");
                reset();
        };
    })
};
  return (
    <>
      <div >
        <div className="col-md-12  ">
            <div className="card mb-3 h-100 bg-info " >
          <div className="row text-center mt-5 ">
          <h2>Welcome Mr. {user.displayName}</h2>
            <h4>{user.email}</h4>
          
            <div className="col-md-12 text-center p-5">
            <img src={img} className=" img-fluid rounded mx-auto d-block" width="290px" height="200px" alt="..."/>
      <div className="card-body">
      <h3 >More Features </h3>
                
        <p className="card-text">Technology We use From {country} </p>
        <p className="card-text ">Warrenty  {duration} </p>
                
            <form className="my-3" onSubmit={handleSubmit(onSubmit)}>
            <input {...register("products", { required: true, maxLength: 100 })} className="my-3 rounded"defaultValue={Model} placeholder='Product Name' /> <br/>
            <input {...register("email", { required: true, maxLength: 100 })} className="my-3 rounded"defaultValue={user.email} placeholder='Product Name' /> <br/>
          <input {...register("rating")} defaultValue= {rating} placeholder='Customer Rating'className=" rounded" /> <br/>
      
          <input type="submit" value="Order Now"className="my-3 rounded"/>
          </form>     
      </div>
    </div>
  </div>
</div>
      </div>
     
      </div>
      </>
    );
};

export default Productdetail;