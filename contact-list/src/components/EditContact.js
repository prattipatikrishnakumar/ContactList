import React,{useState} from 'react';



import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import uuid from 'react-uuid'
import { Title } from '@material-ui/icons';
const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(2),
  
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '300px',
      },
      '& .MuiButtonBase-root': {
        margin: theme.spacing(2),
      },
    },
  }));
  export default  function EditContact(props) {

    const data = useLocation();
    // console.log(data.state.contact)
    const classes = useStyles();
    
    const [Name, setName] = useState(data.state.contact.Name);
    
    const [email, setEmail] = useState(data.state.contact.Email);
    const navigate = useNavigate();

    const handleSubmit = e => {
      e.preventDefault();
      //console.log(Name, email);
      props.updateContactHandler([{id:data.state.contact.id,Sno:data.state.contact.Sno,Name:Name,Email:email}]);
      setName(" ");
      setEmail(" ");
      navigate("/")
    }
  return(
    <>
    <h4>Edit Contact</h4>
    <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="filled"
          required
          value={Name}
          onChange={e => setName(e.target.value)}
        />
        
        <TextField
          label="Email"
          variant="filled"
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
       
        <div>
          {/* <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button> */}
          
          <Button type="submit" variant="contained" color="primary" >
            Update Contact
          </Button>
          {/* <Button variant="contained" size="medium" color="primary" onClick={()=>navigate("/")}>Back To Home</Button> */}
          
        </div>
      </form>
      </>
  );
}

