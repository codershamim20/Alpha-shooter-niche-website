import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const ServiceDetail = () => {
    
    const { id } = useParams();
    
    const [cards , setCards] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
        .then(data=>setCards(data))
    },[])
    return (
        <div className="col-md-12 ">
            <div className="card mb-3 h-100 bg-info" >
  <div className="row  ">
            <div className="col-md-12 text-center p-5">
            <img src={cards.img} className=" img-fluid rounded mx-auto d-block" width="290px" height="200px" alt="..."/>
      <div className="card-body">
      <h1 >This is service Detail Page </h1>
        <h5 className="card-title"> {cards.services}</h5>
        <p className="card-text">Country: {cards.country} </p>
        <p className="card-text">Customer Rating: {cards.rating} star </p>                
      </div>
    </div>
  </div>
</div>
        </div>
        
    );
};

export default ServiceDetail;