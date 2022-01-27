
import ContactCard from './ContactCard'

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';

import IconButton from '@mui/material/IconButton';


import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import {BrowserRouter as Router,Link,Routes,Route,useNavigate} from 'react-router-dom';

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'white' : 'white',
        p: 1,
        m: 1,
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};





export default function ContactList(props) 
{

  console.log(props);

  const navigate = useNavigate();
  const contactsList= props.contacts.length>0?props.contacts.map((contact)=>{
   return  <ContactCard key ={contact.id} onDeleteClickHandler = {props.onDeleteClickHandler} contact={contact}/>
            
  }):<p> No Contacts To Show!!..</p>

  return (
      <>
      <div style={{ width: '100%' }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
          <Item><div><h2>SNO</h2></div></Item>
          <Item><div><h2>NAME</h2></div></Item>
          <Item><div><h2>EMAIL ADDRESS</h2></div></Item>
          <Item></Item>
          <Item><div><Button variant="contained" size="medium" onClick={()=>navigate("/addContact")}>Add Contact</Button></div></Item>
        </Box>
        <>
        {contactsList} 
        </>
    </div>

      </>
    );
}
