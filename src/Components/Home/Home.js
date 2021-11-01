import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Card className="text-center my-5 ">
                
                <Card.Img className="100%" src="https://www.obokash.com/imgs/breadcrumb/default.jpg" alt="Card image" />
                <Card.ImgOverlay  >
                    <h1 className="text-white" >Welcome to
                    Best Tourism</h1> 
                    
        <Card.Body>
        <Card.Title className="text-white">Visa Processing Service</Card.Title>
        <Card.Text className="text-white">Best Travel can be your reliable visa processing agent. Development of modern technology and IT infrastructure, the world become global village and all our neighbours.       </Card.Text>
        
    </Card.Body>
    </Card.ImgOverlay>
            </Card>
            
            <Card className="text-center b-0">                
                <Card.Body>
                <img className="img-fluid" src="https://www.obokash.com/assets/images/image-bg/cover-tour-offers.jpg" alt="" />
    <Card.Title>Why Choose Us</Card.Title>
    <Card.Text className="px-5">
    It is very important for you to choose your travel agency very wisely. When you took one or two weeks off from your regular schedule just for some relaxation. You can check our other qualities in the button below.
    </Card.Text>
    <Button variant="outline-success">VIEW ALL</Button>{' '}
  </Card.Body>
  
</Card>
            
        </div>
    );
};

export default Home;