import React from 'react';
import { useLocation } from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import Image from './User.jpg';


function ContactDetails(props) {

  
const data = useLocation();

  // console.log(data.state.state)
  const navigate = useNavigate();
  
  return (
    <>
    <div className='picture'>
      <img src={Image} alt="User Logo" variant={"rounded"} style={{width: 200,height: 200,}}  />
    </div>
      <div>
         <h2>{data.state.state.Name}</h2>
         <h2>{data.state.state.Email}</h2>
         <Button variant="contained" size="medium" onClick={()=>navigate("/")}>Back To Home</Button>
      </div>
    </>
  );
  
}

export default ContactDetails;



