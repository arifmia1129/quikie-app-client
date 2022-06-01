import React from 'react';
import Draggable from 'react-draggable';

const Card = ({ card }) => {
    const { name, img, usd } = card;
    return (
        <Draggable>
            <div className="bg-[#00000017] h-[195px] w-[309px]">
                <div className='flex justify-between items-center my-5 px-[36px]'>
                    <p>{name}</p>
                    <img width={56} height={56} src={img} alt="" />
                </div>
                <h3 className='text-[36px] text-center'>{usd} USD</h3>
            </div>
        </Draggable>
    );
};

export default Card;