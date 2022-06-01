import React from 'react';
import google from "../../Assets/GOOGL.png";
import facebook from "../../Assets/FB.png";
import amazon from "../../Assets/AMZN.svg";


const HeroCards = () => {
    return (
        <div className='flex justify-center'>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32 my-5'>
                    <div className="bg-[#00000017] h-[195px] w-[309px]">
                        <div className='flex justify-between items-center my-5 px-[36px]'>
                            <p>GOOGL</p>
                            <img width={56} height={56} src={google} alt="" />
                        </div>
                        <h3 className='text-[36px] text-center'>1515 USD</h3>
                    </div>
                    <div className="bg-[#00000017] h-[195px] w-[309px]">
                        <div className='flex justify-between items-center my-5 px-[36px]'>
                            <p>FB</p>
                            <img width={56} height={56} src={facebook} alt="" />
                        </div>
                        <h3 className='text-[36px] text-center'>266 USD</h3>
                    </div>
                    <div className="bg-[#00000017] h-[195px] w-[309px]">
                        <div className='flex justify-between items-center my-5 px-[36px]'>
                            <p>AMZN</p>
                            <img width={56} height={56} src={amazon} alt="" />
                        </div>
                        <h3 className='text-[36px] text-center'>3116 USD</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroCards;