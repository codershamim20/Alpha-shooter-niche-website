import React, { useEffect, useState } from 'react';

const Allorders = (props) => {
    const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:7000/allorders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  const handleDelete = id => {
    const url = `http://localhost:7000/allorders/${id}`
    fetch(url, {
      method:"DELETE"
    })
      .then(res => res.json())
      .then(data => {
          // console.log(data);
          if (data.deletedCount) {
              alert("Deleted successfully")
            const remaining = orders.filter(order => order._id !== id);
            setOrders(remaining);  
          }
          
    })
  }
  return (
    <div>
      <h1 className="text-center">All Orders</h1>
  <div className="orders">
    <div className="row container">
      {orders?.map((pd, index) => (
        <div className="col-md-4 col-lg-6 ">
          <div className="service p-3 border border m-2 bg-success rounded">
            <h4>Product: {pd.products}</h4>
           
            <button onClick={()=>handleDelete(pd._id)} className="btn btn-danger mx-5">Delete</button> 
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
);
};
                      
export default Allorders;