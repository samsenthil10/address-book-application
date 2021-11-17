import React from 'react';

import './HomePage.scss';
import {Link} from 'react-router-dom';
import AddressBookService from '../../services/AddressBookService';
import Display from './Display';

var addressBookService = new AddressBookService();  


class AddressBookHome extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
          contactsArray: []
        };
          
      }
    
     getAllContactsList = () => {
        addressBookService.getAllContacts()
        .then(responseData => {
          this.setState({contactsArray: responseData.data.data});
        })
      }

  render () {
    return (
        <div className="body" onLoad={this.getAllContactsList}>
        <header className="header-content header">
                <div className="logo-content">
                    <Link to="/"><img className="logo-content-img" src="/assets/images/logo.png" alt=""></img></Link>
                    <div>
                        <span className="text-address">ADDRESS</span><br></br>
                        <span className="text-address text-book">BOOK</span>
                    </div>
                </div>
            </header>
        <div className="main-content">
            <div className="main-header-content">
                <div className="addressbook-detail-text">
                    Person Details
                    <div className="contact-count">{this.state.contactsArray.length}</div>
                </div>
                <Link to="address-book-form" className="add-button">+ Add Person</Link>
            </div>
        </div>
        <div className="main-content">
            <div className="table-main">
                <Display contactsArray = {this.state.contactsArray} />
            </div>
        </div>
    </div>
    );
  }
}

export default AddressBookHome;