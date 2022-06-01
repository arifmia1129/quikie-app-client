import React from 'react';
import { Link } from 'react-router-dom';
import title from "../Assets/title.png";

const Header = () => {
    return (
        <div className='bg-[#031c47cc] flex justify-between items-center px-10 py-[11px]' height={76}>
            <div className='hidden md:block'>
                <Link to="/">
                    <img width={120} height={54} src={title} alt="" />
                </Link>
            </div>
            <div className='text-white'>
                <Link className='mx-10' to="/">Home</Link>
                <Link className='mx-10' to="/view">View</Link>
            </div>
        </div>
    );
};

export default Header;