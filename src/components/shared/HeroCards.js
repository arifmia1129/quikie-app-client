import React from 'react';
import google from "../../Assets/GOOGL.png";
import facebook from "../../Assets/FB.png";
import amazon from "../../Assets/AMZN.svg";
import Card from './Card';


const HeroCards = () => {

    const cards = [
        { id: 1, name: "GOOGL", img: google, usd: 1515 },
        { id: 2, name: "FB", img: facebook, usd: 266 },
        { id: 3, name: "AMZN", img: amazon, usd: 3116 },
    ]


    return (
        <div className='flex justify-center'>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32 my-5'>
                    {
                        cards.map(card => <Card
                            key={card.id}
                            card={card}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default HeroCards;