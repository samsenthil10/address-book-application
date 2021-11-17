import './AddressBookForm.scss';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import AddressBookService from '../../services/AddressBookService';

const AddressBookForm = (props) => {

    let initialValue = {
        name: '',
        phoneNumber: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        isUpdate: false,
        error: {
            name: '',
            phoneNumber: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        }
    }

    const addressBookService = new AddressBookService();

    const [formValue, setForm] = useState(initialValue);
    const [displayMessageSuccess, setDisplayMessageSuccess] = useState("");
    const [displayMessageError, setDisplayMessageError] = useState("");
    const { id } = useParams()

    const changeValue = (event) => {
        setForm({ ...formValue, [event.target.name]: event.target.value })
    }

    const validData = async () => {
        let isError = false;
        let error = {
            name: '',
            phoneNumber: '',
            address: '',
            city: '',
            state: '',
            zip: ''

        }
        const namePattern = /^[A-Z]{1}[A-Za-z]{2,}([\s]?([a-zA-Z]+))*$/
        if (!namePattern.test(formValue.name) || formValue.name.length < 1) {
            error.name = 'Invalid Name'
            isError = true;
        }
        const phoneNumberPattern = /^[+]?([0-9]{2})?[789]{1}[0-9]{9}$/
        if (!phoneNumberPattern.test(formValue.phoneNumber) || formValue.phoneNumber.length < 1) {
            error.phoneNumber = 'Invalid PhoneNumber'
            isError = true;
        }
        const addressPattern = /^[a-zA-Z0-9]{3,}([\s]?[a-zA-Z0-9]{3,})*$/
        if (!addressPattern.test(formValue.address) || formValue.address.length < 1) {
            error.address = 'Invalid Address'
            isError = true;
        }
        const zipPattern = /^[0-9]{3}[\s]?[0-9]{3}$/
        if (!zipPattern.test(formValue.zip) || formValue.zip.length < 1) {
            error.zip = 'Invalid ZipCode'
            isError = true;
        }

        if (formValue.city.length < 1) {
            error.city = 'City is required'
            isError = true;
        }
        if (formValue.state.length < 1) {
            error.state = 'State is required'
            isError = true;
        }

        await setForm({ ...formValue, error: error })
        return isError;
    }


    useEffect(() => {

        if (id) {
            formValue.isUpdate = true
            addressBookService.getContact(id).then(contact => {
                setForm({
                    ...formValue,
                    name: contact.data.data.firstName+" "+contact.data.data.lastName,
                    phoneNumber: contact.data.data.phoneNumber,
                    address: contact.data.data.address,
                    city: contact.data.data.city,
                    state: contact.data.data.state,
                    zip: contact.data.data.zip
                });
            })
        }

    })

    const save = async (event) => {
        event.preventDefault();

        if (await validData()) {
            return;
        } else {            

            var  nameArray = formValue.name.split(" ")
            let object = {
                
                firstName: nameArray[0],
                lastName: nameArray[1],
                phoneNumber: formValue.phoneNumber,
                address: formValue.address,
                city: formValue.city,
                state: formValue.state,
                zip: formValue.zip,
            };
            if (formValue.isUpdate) {
                addressBookService
                    .updateContact(id, object)
                    .then((data) => {
                        setDisplayMessageError("")
                        setDisplayMessageSuccess("Successfully Updated Contact")
                        setTimeout(3000)
                        reset()
                    })
                    .catch((error) => {
                        setDisplayMessageSuccess("")
                        setDisplayMessageError("Error While Updating Contact")
                    });
            } else {
                console.log(object)
                addressBookService
                    .addContact(object)
                    .then((data) => {
                        setDisplayMessageError("")
                        setDisplayMessageSuccess("Successfully Added Contact")
                        setTimeout(3000)
                        reset()
                    })
                    .catch((err) => {
                        setDisplayMessageSuccess("")
                        setDisplayMessageError("Error While Adding Contact")
                    });
            }
        }
    }

    const reset = () => {
        setForm({ ...initialValue, id: formValue.employeeId, isUpdate: formValue.isUpdate });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <body>
            <header className="header-content header">
                <div className="logo-content">
                    <Link to="/"><img className="logo-content-img" src="../assets/images/logo.png" alt=""></img></Link>
                    <div>
                        <span className="text-address">ADDRESS</span><br></br>
                        <span className="text-address text-book">BOOK</span>
                    </div>
                </div>
            </header>

            <div className="form-content">
                <form className="form" name="contactForm" action="#" onSubmit={save}>
                    <div className="form-head">
                        <div className="form-head-text">Person Address Form</div>
                        <Link to="/"><img src="../assets/images/cancel.png" alt="" className="form-cancel-img"></img></Link>
                    </div>
                    <div className="row-content">
                        <label className="label text" for="name">Full Name</label>
                        <div className="row-input">
                            <input className="input" type="text" name="name" id="name" required autoComplete="off" value={formValue.name} onChange={changeValue} placeholder="Your Name"></input>
                            <div className="error-output" for="text">{formValue.error.name}</div>
                        </div>
                    </div>
                    <div className="row-content">
                        <label className="label text" for="phone">Phone Number</label>
                        <input className="input" type="text" name="phoneNumber" id="phone" required autoComplete="off" value={formValue.phoneNumber} onChange={changeValue} placeholder="Your Phone Number"></input>
                        <div className="error-output" for="text">{formValue.error.phoneNumber}</div>
                    </div>
                    <div className="row-content">
                        <label className="label text" for="address">Address</label>
                        <textarea className="input" id="address" name="address" required autoComplete="off" value={formValue.address} onChange={changeValue} placeholder="Your Address"></textarea>
                        <div className="error-output" for="text">{formValue.error.address}</div>
                    </div>
                    <div className="row-content-exp">
                        <div className="oneRow-content">
                            <label className="label text" for="state">State</label>
                            <select name="state" id="state" className="select-input" required onChange={changeValue} value={formValue.state}><option value="0">Select State</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Tamil nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                </select>
                        </div>
                        <div className="oneRow-content">
                            <label className="label text" for="city">City</label>
                            <select name="city" id="city" className="select-input" required onChange={changeValue} value={formValue.city}>
                                <option value="0">Select City</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Hyderabad">Hyderabad</option>
                                <option value="Mysore">Mysore</option>
                                </select>
                        </div>
                        <div className="zip-container">
                            <label className="label text" for="zip">Zip</label>
                            <input className="input" type="text" name="zip" id="zip" required autoComplete="off" value={formValue.zip} onChange={changeValue} placeholder="Your Zipcode"></input>
                            <div className="error-output" for="text"></div>
                        </div>
                    </div>

                    <div className="submit-reset-container">
                        <button type="submit" className="button submitButton" id="submitButton" onClick={save}>{formValue.isUpdate ? 'Update' : 'Submit'}</button>
                        <button type="button" onClick={reset} className="button">Reset</button>
                    </div>
                    <div className="displayMessageSuccess">{displayMessageSuccess}</div>
                    <div className="displayMessageError">{displayMessageError}</div>
                </form>
            </div>
        </body>

    )
}

export default AddressBookForm;