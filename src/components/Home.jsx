import React from 'react'
import LogoImage from '../assets/companylogo.svg'
import {useNavigate} from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate(); 
    return (
    <div className='flex flex-col w-screen h-screen items-center justify-center'>
        <div className="">
            <img src={LogoImage} alt="Logo"/>
        </div>
        <div className='text-7xl font-family[Rubik] font-normal letter-spacing[-5%]'>Hello,</div>
        <div className='text-5xl font-family[Rubik] font-normal letter-spacing[-5%]'>{localStorage.getItem('email')}</div>
        <button onClick = {()=>{
            navigate('/');
            localStorage.setItem('email', null);
        }}className="bg-[#1918FF] text-white flex justify-center px-10 py-4 mt-10 rounded-full">Logout</button>

    </div>
  )
}

export default Home