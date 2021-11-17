import React from 'react';
import './HomePage.scss';
import AddressBookService from '../../services/AddressBookService';
import { Link } from 'react-router-dom'

var addressBookService=new AddressBookService();

const Display = (props) => {
  
    const remove= (id) =>{
        addressBookService.deleteContact(id);
        window.location.reload();
    } 
 
  return (
    <table id="display" className="table">
      <tbody>
        
        <tr key={-1}>
            <th>Full Name</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>zip</th>
        </tr>
        {
            props.contactsArray && props.contactsArray.map((contact,index) => (
              <tr key={index}>
                  <td>{contact.firstName} {contact.lastName}</td>
                  <td>{contact.phoneNumber}</td>
                  <td>{contact.address}</td>
                  <td>{contact.city}</td>
                  <td>{contact.state}</td>
                  <td>{contact.zip}</td>
                  <td><img src="../assets/icons/delete-black-18dp.svg" onClick={() => remove(contact.contactId)} alt="delete" />
                      <Link to={`/address-book-form/${contact.contactId}/`}> 
                      <img src="../assets/icons/create-black-18dp.svg" alt="update" />
                      </Link>
                      </td>
              </tr>
            ))
          }
        </tbody>
    </table>
  )
}


export default Display;