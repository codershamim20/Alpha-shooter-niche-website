import React, { useEffect, useState } from 'react';
import Card from '../single-card/Card';

const ManageProduct = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('http://localhost:7000/productsdata')
            .then(res => res.json())
     .then(data=>setCards(data))   
    }, [])
    const handleDelete = id => {
        const url = `http://localhost:7000/productsdata/${id}`
        fetch(url, {
          method:"DELETE"
        })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              if (data.deletedCount) {
                  alert("Deleted successfully")
                const remaining = cards.filter(service => service._id !== id);
                setCards(remaining);  
              }
              
        })
      }
    return (
        <div>
            <h2 className="text-center">Manage Products</h2>
            {
                cards.map(card => <div className='text-center my-5 bg-info rounded p-2' key={Card._id}>
                    <h3 >{card.Model}</h3>
                    <h3 >Made in {card.country}</h3>
                    <button onClick={()=>handleDelete(card._id)} className="btn btn-danger mx-5">Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageProduct;