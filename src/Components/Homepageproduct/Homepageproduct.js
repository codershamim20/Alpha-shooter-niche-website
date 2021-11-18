import React, { useEffect, useState } from 'react';

import Card from '../single-card/Card';

const Services = () => {
    const [cards, setCards] = useState([]);
    
    
    useEffect(() => {
        fetch('https://fierce-cliffs-19562.herokuapp.com/productsdata')
            .then(res => res.json())
        .then(data=>setCards(data))
    },[])
    return (
       
        <div>
            <h2 className='text-center my-5'>OUR PRODUCTS</h2>
            <div className="row m-5">
                <div className="col-md-12">
                    {/* card-display-area */}
                    <div className="row g-3">
                        {
                            cards.slice(0,6).map(card => <Card
                                key={card.id}
                                card={card}
                            >

                            </Card>)
                        }
                        
                    
                    </div>
                    
                </div>
            </div>
        </div>
    
    );
};

export default Services;