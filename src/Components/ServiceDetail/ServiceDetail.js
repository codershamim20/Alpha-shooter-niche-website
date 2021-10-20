import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const ServiceDetail = () => {
    
    const { id } = useParams();
    
    const [cards , setCards] = useState([]);
    useEffect(() => {
        fetch('../services.json')
            .then(res => res.json())
        .then(data=>setCards(data))
    },[])
    
    const item = cards.filter(td => td.id == id);
   console.log(item)
   const{courses,img,country,rating}=item[0]||{}
    return (
        <div className="col-md-12 ">
            <div className="card mb-3 h-100 bg-info" >
  <div className="row  ">
            <div className="col-md-12 text-center p-5">
            <img src={img} className=" img-fluid rounded mx-auto d-block" width="290px" height="200px" alt="..."/>
      <div className="card-body">
      <h1 >This is service Detail Page </h1>
        <h5 className="card-title"> {courses}</h5>
        
        <p className="card-text">Technology We use From {country} </p>
        <p className="card-text">Customer Rating: {rating} </p>                
      </div>
    </div>
  </div>
</div>
        </div>
        
    );
};

export default ServiceDetail;