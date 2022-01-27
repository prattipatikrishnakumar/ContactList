import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';

import IconButton from '@mui/material/IconButton';
import {BrowserRouter as Router,Link,Routes,Route,useNavigate} from 'react-router-dom';


import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

import ContactDetails from './ContactDetails';
import { useLocation } from "react-router";
import EditContact from './EditContact';

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



// let data = useLocation();



export default function ContactCard(props) {
  const navigate = useNavigate();
  // console.log(props.contact)
  return (
    <>
 

    <div style={{ width: '100%' }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
      {/* <Link to={{pathname:`/contactDetails/${props.contact.id}`, state:{contact:props.contact}}}> */}

      <Item>{props.contact.id}</Item>
      
      <Item>  
        
          <Link to={`/contactDetails/${props.contact.id}` } state={{ state: props.contact }} >{props.contact.Name}</Link>
    
    {/* <Link to={{
    pathname: `/contactDetails/${props.contact.id}`,
    state: {contact:props.contact}
  }}>{props.contact[0].Name}</Link> */}
    
    </Item>
      <Item>{props.contact.Email}</Item>

      <Item><Link to={`/editContact`} state={{contact:props.contact}} ><Button  variant="outlined" color="primary"  size='small'>
          Edit Contact
      </Button></Link></Item>


      <Item><Button onClick={()=>props.onDeleteClickHandler(props.contact.id)} variant="outlined" color="error"  size='small'>
          Delete Contact
      </Button></Item>



        {/* <Item><Button  variant="outlined" startIcon={ <DeleteIcon />} onClick={()=>props.onDeleteClickHandler(props.contact.id)}>
       Delete Contact
        </Button></Item> */}
      </Box>
    </div>
  </>
  );
}

