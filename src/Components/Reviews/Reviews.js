import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    
  useEffect(() => {
    fetch("http://localhost:7000/allreviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  // console.log(services);
    return (
        <div>
      <h1 className="text-center">Customers Feedback About Our Product</h1>
      <div className="services">
        <div className="row container">
          {reviews?.map((pd, index) => (
            <div className="col-md-4 col-lg-6 ">
              <div className="service p-3 border border m-2 bg-secondary rounded">
                 <h3>Customer Name: {pd.Customer}</h3>
                <h4>Product: {pd.products}</h4>
                <h5>Rating: {pd.rating}</h5>
                <h5>Experience: {pd.message}</h5>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default Reviews;