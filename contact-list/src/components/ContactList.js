import React from 'react';
import ContactCard from './ContactCard'

export default function ContactList(props) 
{

  console.log(props.contacts);
  const contactsList= props.contacts.map((contact)=>{
   return  <ContactCard key ={contact.id} onDeleteClickHandler = {props.onDeleteClickHandler} contact={contact}/>
            
  })
  return (
      <>
        <div>
         {contactsList}
        </div>
      </>
    );
}
