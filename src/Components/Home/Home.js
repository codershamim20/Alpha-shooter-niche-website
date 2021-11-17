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
                
<<<<<<< HEAD
                <Card.Img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1jVaa7eEFaN5TBpZv3dvaQOR-sJ9A2zq8bA&usqp=CAU" alt="Card image" />
                <Card.ImgOverlay  >
                    <h1 className="text-danger pt-5">Welcome To Alpha Shooters </h1> 
                    
        <Card.Body>
        <Card.Title className="text-white pt-5">Short Sony Alpha  Shooters</Card.Title>
        <Card.Text className="text-white">
        The Sony Alpha camera system was first introduced on 5 June 2006 with the launch of the Sony DSLR-A100 that expanded upon the Konica Minolta camera technologies whose assets were acquired by Sony in early 2006.
        
        Our Philosophy is to achieve the best results for our customers through safe, high quality services and acting in their best interests.
        </Card.Text>
=======
                <Card.Img className="100%" src="https://www.obokash.com/imgs/breadcrumb/default.jpg" alt="Card image" />
                <Card.ImgOverlay  >
                    <h1 className="text-white" >Welcome to
                    Best Tourism</h1> 
                    
        <Card.Body>
        <Card.Title className="text-white">Visa Processing Service</Card.Title>
        <Card.Text className="text-white">Best Travel can be your reliable visa processing agent. Development of modern technology and IT infrastructure, the world become global village and all our neighbours.       </Card.Text>
>>>>>>> a6b5dbc676a926d9ec41bf33fd707c9987ebd38b
        
    </Card.Body>
    </Card.ImgOverlay>
            </Card>
            <Homepageproduct></Homepageproduct>
            <Reviews></Reviews>
        <Card className="text-center b-0">                
                <Card.Body>
<<<<<<< HEAD
                <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3rkzEEMKedILkQkssTYVwQt-UalUryePuzg&usqp=CAU" alt="" />
    <Card.Title>Alpha Branding</Card.Title>
    <Card.Text className="px-5">
    Prior to the acquisition by Sony, the Alpha branding had already been used on the Japanese market by Minolta for their AF camera system (marketed as “Dynax” in Europe, and “Maxxum” in North America).

Sony adopted the name “A-mount system” for the Minolta AF lens mount and retained this in their new SLR range.

In May 2010, Sony introduced two Alpha NEX (New E-mount Experience) mirrorless interchangeable lens cameras, the Nex 3 and the Nex 5. Both cameras featured new proprietary Sony E-mount technology, and so the current E-mount system was born.
    </Card.Text>
    <Button variant="success">Read More</Button>{' '}
=======
                <img className="img-fluid" src="https://www.obokash.com/assets/images/image-bg/cover-tour-offers.jpg" alt="" />
    <Card.Title>Why Choose Us</Card.Title>
    <Card.Text className="px-5">
    It is very important for you to choose your travel agency very wisely. When you took one or two weeks off from your regular schedule just for some relaxation. You can check our other qualities in the button below.
    </Card.Text>
    <Button variant="outline-success">VIEW ALL</Button>{' '}
>>>>>>> a6b5dbc676a926d9ec41bf33fd707c9987ebd38b
  </Card.Body>
  
</Card>
            
        </div>
    );
};

export default Home;