import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  // console.log(props);
    const{_id,Model,img,country,rating,duration}=props.card||{}
    return (
        <div className="col-md-4 col-sm-6">
            <div className="card mb-3 h-100 bg-info" >
  <div className="row  ">
            <div className="col-md-12 text-center p-5">
            <img src={img} className=" img-fluid rounded mx-auto d-block" width="290px" height="200px" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"> {Model}</h5>
        <p className="card-text">Warrenty: {duration}</p>
        <p className="card-text">Technology We use From {country} </p>
        <p className="card-text">Customer Rating: {rating} </p>
        <Link to={`/productdetail/${_id}`}>
                  <button className="btn btn-success">Purchase Now</button>
          </Link>
          <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;