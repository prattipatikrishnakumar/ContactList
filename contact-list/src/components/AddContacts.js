import React,{useState} from 'react';


import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useNavigate} from 'react-router-dom';



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

function AddContacts(props) {

    // console.log(props)
    const classes = useStyles();
    
    const [Name, setName] = useState('');
    
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = e => {
      console.log(Name)
      e.preventDefault();
      //console.log(Name, email);
      props.contactHandler([{Name:Name,Email:email}]);
      setName(" ");
      setEmail(" ");
    //  console.log(props.history);
    // alert("Contact Added Successfully!!!");   
    // navigate('/'); 
    // window.location.reload(false);

    };
    
    
  
    return (
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
            Add Contact
          </Button>
          <Button variant="contained" size="medium" color="primary" onClick={()=>navigate("/")}>Back To Home</Button>
          
        </div>
      </form>
    );
}

export default AddContacts;
