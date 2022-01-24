import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';

import IconButton from '@mui/material/IconButton';


export default function ContactCard(props) {
  return (
    <>
    <div>
      <div>Name : {props.contact[0].Name}</div>
      <div>Email : {props.contact[0].Email}</div>
      <Stack direction="row" spacing={2}>
        <Button  variant="outlined" startIcon={<DeleteIcon />} onClick={()=>props.onDeleteClickHandler(props.contact.id)}>
          Delete
        </Button>
        {/* <Button onClick={()=>props.onDeleteClickHandler(props.contact.id)} variant="outlined" >
          Delete Contact
        </Button> */}

        {/* <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton> */}
      </Stack>
      
      
    </div>
    
  </>
  );
}



