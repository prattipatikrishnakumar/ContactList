import React,{useState,useEffect} from 'react';

import uuid from 'react-uuid'


import Header from './header';

import ContactList from './ContactList';

import AddContact from './AddContacts';

import ContactCard from './ContactCard'



function App() {

  const [contacts,setContacts]=useState([]);

  const contactHandler=(contact)=>
  {
    //console.log(contact);
    setContacts([...contacts,{id : uuid(), ...contact}]);
    // setContacts([...contacts, ...contact]);
   // console.log(contacts);
  }

  const onDeleteClickHandler=(id)=>
  {
    const newContactList = contacts.filter((contact)=>{
      return id!==contact.id
    })
    // console.log(id);
    setContacts(newContactList);
  }

  useEffect(()=>{
    const retrieveContacts=JSON.parse(localStorage.getItem("contacts"));

    if(retrieveContacts)setContacts(retrieveContacts);
  },[])

  useEffect(()=>{

    localStorage.setItem("contacts",JSON.stringify(contacts))

  },[contacts]);

  return (
    <div className="App">
      <Header/>
     
      <AddContact  contactHandler={contactHandler}/>

      <ContactList onDeleteClickHandler = {onDeleteClickHandler} contacts={contacts}/>
        
    </div>
  );
}

export default App;
