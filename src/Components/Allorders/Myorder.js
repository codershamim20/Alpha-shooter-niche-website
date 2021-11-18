import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";



const Myorder = (props) => {
  const { user } = useAuth();
  const [myorders, setMyorders] = useState([])
  
  useEffect(() => {
    fetch(`http://localhost:7000/allorders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyorders(data));
  }, [user?.email]);
// console.log(user?.email)
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
          const remaining = myorders.filter(order => order._id !== id);
          setMyorders(remaining);  
        }
        
  })
}
  return (
    <div>
      <h1 className="text-center">My Order: { myorders.length}</h1>
  <div className="orders">
    <div className="row container">
      {myorders?.map((pd, index) => (
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

export default Myorder;
