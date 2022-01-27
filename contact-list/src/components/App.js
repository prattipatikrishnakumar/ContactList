import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router,Routes,Route,useHistory} from 'react-router-dom';

import uuid from 'react-uuid'
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContacts';
import ContactDetails from './ContactDetails';
import Api from '../api/contact'
import EditContact from './EditContact';



function App() {

  const [contacts,setContacts]=useState([]);
  // const [getContactToBePosted,SetgetContactToBePosted]=useState({});

 const contactHandler=(contact)=>
  {
    //console.log(contact);
    // setContacts([...contacts,{id : uuid(), ...contact}]);

    // SetgetContactToBePosted(contact);
    const addContact = async ()=>{
    const sno=contacts.length+1;
      const response = await Api.post("/contacts",{id:uuid(),Sno:sno,Name:contact[0].Name,Email:contact[0].Email});
      
      setContacts([...contacts,response.data]);

    }
    addContact();
    // setContacts([...contacts, ...contact]);
   // console.log(contacts);
  }
  const updateContactHandler= async (contact)=>
  {
    console.log(contact[0])
    const response= await Api.put(`/contacts/${contact[0].id}`,contact[0])
    console.log(response)
    setContacts(contacts.map((c)=>{

      return c.id===response.data.id?{...response.data}:c
    })
    
    )
    
  }
  const onDeleteClickHandler= async (id)=>
  {
    await Api.delete(`/contacts/${id}`)
    
    const newContactList = contacts.filter((contact)=>{
      return contact.id!==id
    })
    //  console.log(newContactList);
    
    // setContacts(newContactList);
    // console.log("Here",newContactList)
    
    // for (var i = Sno; i < newContactList.length; i++) {
    //     newContactList[i].id = newContactList[i-1].id +1;
    // }
    // console.log(newContactList)
    setContacts(newContactList);
  }
  const retrieveContacts= async ()=>
  {
    const response = await Api.get("/contacts");
    return response;
  }
  useEffect(()=>{
    // const retrieveContacts=JSON.parse(localStorage.getItem("contacts"));

    // Api.get("/contacts").then((response)=>setContacts(response.data));
    const getAllContacts= async ()=>{

      const response=await retrieveContacts();
      if(response.data)
      {
        setContacts(response.data);
      }

    }
    getAllContacts();


    // if(retrieveContacts)setContacts(retrieveContacts);
  },[])
// useEffect(()=>{
//   const getAllContacts= async ()=>{

//     const response=await retrieveContacts();
//     if(response.data)
//     {
//       setContacts(response.data);
//     }

//   }
//   getAllContacts();
// },[])


  return (
    <>
    <div className="App" style={{textAlign:"center"}}>
      <Router>
        <Header/>
       
        <Routes>
            
          <Route path="/" element={<ContactList onDeleteClickHandler = {onDeleteClickHandler} contacts={contacts}></ContactList>}/>
          <Route path="/addContact" element={<AddContact  contactHandler={contactHandler}></AddContact>}/>
          <Route path="/contactDetails/:Sno" element={<ContactDetails></ContactDetails>}/>
          <Route path="/editContact" element={<EditContact updateContactHandler={updateContactHandler}></EditContact>}/>
          
        </Routes>

       
      </Router>
        
    </div>
    

    </>

          // <Grid container spacing={1}>
          //   <Grid container item spacing={3}>
          //     <Header/>
          //   </Grid>
          //   <Grid container item spacing={3}>
          //     <AddContact  contactHandler={contactHandler}/>
          //   </Grid>
          //   <Grid container item spacing={3}>
          //     <ContactList onDeleteClickHandler = {onDeleteClickHandler} contacts={contacts}/>
          //   </Grid>
          // </Grid>
  );
}

export default App;
