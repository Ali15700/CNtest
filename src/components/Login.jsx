import React, { useEffect, useState } from "react";
import SideImage from "../assets/buildingimg.png";
import LogoImage from "../assets/companylogo.svg";
import { db } from "../firebase-config/firebase-config";
import {addDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import Modal from './Modal';
const Login = () => {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [userstatus, setUserStatus] = useState(true);
  const [login, setLogin] = useState(
    localStorage.getItem("isLogin") === "true"
  );
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("isLogin", login);
  }, [login]);

  const checkUser = async() => {

    const q = query(collection(db, "users"), where("email", "==", email));

    const querySnapshot = await getDocs(q);
    
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    if(doc.data()){
            setUserStatus(false);
            setVisible(true);
            setMessage("Email Already Exists");
            
            
    }
    
    
    });
      
 
  }

  const addUser = async (e) => {
    e.preventDefault();
    
    if(email ==="" || password ===""){
        await setMessage("Please Enter All Details To Continue");
        setVisible(true);
    }else{
    checkUser();
    if(!userstatus){


     try {
        const docRef = await addDoc(collection(db, "users"), {
         email: email,
         password: password,
         
       });
       
      
     } catch (e) {
       console.error("Error adding document: ", e);
     }    
     localStorage.setItem('email', email);
       navigate('/home');

    }
}

  };
  return (
    <div className="w-screen h-screen md:flex-row flex flex-col-reverse justify-between">
      <div className="w-full h-screen flex flex-col justify-center">
        <div className="w-full md:pt-0 pt-20 flex items-center justify-center px-10">
          <img
            className="object-position:[0px 0px]"
            src={LogoImage}
            alt="Logo"
          />
        </div>
        { visible && <Modal msg={message} />}
        <form className="px-10 md:px-20 pt-5 pb-20 md:pb-0 items-center flex-col flex md:h-auto">
          <input
            type="email"
            placeholder="Email"
            className="pl-2 w-full h-[60px] outline-none border border-blue-500 rounded-xl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="pl-2 w-full h-[60px] outline-none border border-blue-500 rounded-xl mt-6"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to={"/home"}>
            <button
              type="submit"
              className="bg-[#1918FF] text-white flex justify-center px-10 py-4 mt-10 rounded-full"
              onClick={addUser}
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
      <div className="w-full">
        <img className="h-screen w-screen" src={SideImage} alt="bannerImage" />
      </div>
    </div>
  );
};

export default Login;