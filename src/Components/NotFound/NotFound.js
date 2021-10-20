import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img className="align-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvLGej-zITnAg0CgF-YxhIPTxHLuXIbpvCrw&usqp=CAU" width="100%" height="500px" alt="" />
            <Link to="/home" > <Button variant="warning">Go Back Home</Button>{' '}</Link>
        </div>
    );
};

export default NotFound;