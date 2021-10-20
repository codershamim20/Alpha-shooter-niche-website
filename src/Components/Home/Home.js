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
                
                <Card.Img className="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT10Obz4Pr2-zrjpojoivNIM-0Nu4r9yQTUqQ&usqp=CAU" alt="Card image" />
                <Card.ImgOverlay  >
                    <h1 >Welcome to
                    Meni Derma Clinic</h1> 
                    
        <Card.Body>
        <Card.Title>Special treatment</Card.Title>
        <Card.Text>Revitalise SkinCare Clinic Ltd is a CQC registered (Care Quality Commission), exclusive, well established medical aesthetic clinic based in Bath and Wiltshire. Founded in 2013 by Arvin Hassanpour, we are experts in medical facial aesthetics.

        Our key treatments include Wrinkle Reduction Injections (Botox), Dermal Fillers, Non-Surgical Face Lift with PDO Threads, Prescription Skincare for Acne, Rosacea and Hyperpigmentation, Mole and Skin Tag Removal, Hyperhidrosis treatment (excessive sweating) and Advanced Laser Hair Removal.

        Our Philosophy is to achieve the best results for our patients through safe, high quality services and acting in their best interests.
        </Card.Text>
        
    </Card.Body>
    </Card.ImgOverlay>
            </Card>
            
            <Card className="text-center b-0">                
                <Card.Body>
                <img className="img-fluid" src="https://secure.toolkitfiles.co.uk/clients/34066/siteimages/large/save-face1.png?2a064e" alt="" />
    <Card.Title>Save Face Accredited</Card.Title>
    <Card.Text className="px-5">
    At Revitalise SkinCare Clinic we believe that excellent patient care, high standards of practice, knowledge and training go hand in hand to deliver great aesthetic results. As registered members of Save Face we ensure that you do not compromise on either. Please click on the link below to find out more information and write reviews.
    </Card.Text>
    <Button variant="outline-success">Safe Skin</Button>{' '}
  </Card.Body>
  
</Card>
            
        </div>
    );
};

export default Home;