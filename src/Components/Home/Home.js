import React from 'react';
import { Button, Card} from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Homepageproduct from '../Homepageproduct/Homepageproduct';
import Reviews from '../Reviews/Reviews';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <Card className="text-center">
                
                <Card.Img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1jVaa7eEFaN5TBpZv3dvaQOR-sJ9A2zq8bA&usqp=CAU" alt="Card image" />
                <Card.ImgOverlay  >
                    <h1 className="text-danger pt-5">Welcome To Alpha Shooters </h1> 
                    
        <Card.Body>
        <Card.Title className="text-white pt-5">Short Sony Alpha  Shooters</Card.Title>
        <Card.Text className="text-white">
        The Sony Alpha camera system was first introduced on 5 June 2006 with the launch of the Sony DSLR-A100 that expanded upon the Konica Minolta camera technologies whose assets were acquired by Sony in early 2006.
        
        Our Philosophy is to achieve the best results for our customers through safe, high quality services and acting in their best interests.
        </Card.Text>
        
    </Card.Body>
    </Card.ImgOverlay>
            </Card>
            <Homepageproduct></Homepageproduct>
            <Reviews></Reviews>
        <Card className="text-center b-0">                
                <Card.Body>
                <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3rkzEEMKedILkQkssTYVwQt-UalUryePuzg&usqp=CAU" alt="" />
    <Card.Title>Alpha Branding</Card.Title>
    <Card.Text className="px-5">
    Prior to the acquisition by Sony, the Alpha branding had already been used on the Japanese market by Minolta for their AF camera system (marketed as “Dynax” in Europe, and “Maxxum” in North America).

Sony adopted the name “A-mount system” for the Minolta AF lens mount and retained this in their new SLR range.

In May 2010, Sony introduced two Alpha NEX (New E-mount Experience) mirrorless interchangeable lens cameras, the Nex 3 and the Nex 5. Both cameras featured new proprietary Sony E-mount technology, and so the current E-mount system was born.
    </Card.Text>
    <Button variant="success">Read More</Button>{' '}
  </Card.Body>
  
</Card>
            
        </div>
    );
};

export default Home;