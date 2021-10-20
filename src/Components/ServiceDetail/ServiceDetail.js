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
    
    const item = cards.map(td => td.id === id);

    
    return (
        <div>
            <h1>This is service Detail Page </h1>
            {/* <h3>Name : {item.courses}</h3> */}
            <img src={item.img} alt="" />
        </div>
    );
};

export default ServiceDetail;