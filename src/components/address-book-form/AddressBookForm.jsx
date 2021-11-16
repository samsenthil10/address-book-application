import './AddressBookForm.scss';
import { Link } from 'react-router-dom';

const AddressBookForm = (props) => {

    return (
        <body>
            <header class="header-content header">
                <div class="logo-content">
                    <Link to="/"><img class="logo-content-img" src="../assets/images/logo.png" alt=""></img></Link>
                    <div>
                        <span class="text-address">ADDRESS</span><br></br>
                        <span class="text-address text-book">BOOK</span>
                    </div>
                </div>
            </header>

            <div class="form-content">
                <form class="form" name="contactForm" action="#" onreset="resetForm()" onsubmit="save(event)">
                    <div class="form-head">
                        <div class="form-head-text">Person Address Form</div>
                        <Link to="/"><img src="../assets/images/cancel.png" alt="" class="form-cancel-img"></img></Link>
                    </div>
                    <div class="row-content">
                        <label class="label text" for="name">Full Name</label>
                        <div class="row-input">
                            <input class="input" type="text" name="Name" id="name" required autocomplete="off"></input>
                            <error-output class="name-error" for="text"></error-output>
                        </div>
                    </div>
                    <div class="row-content">
                        <label class="label text" for="phone">Phone Number</label>
                        <input class="input" type="text" name="Phone" id="phone" required autocomplete="off"></input>
                        <error-output class="phone-error" for="text"></error-output>
                    </div>
                    <div class="row-content">
                        <label class="label text" for="address">Address</label>
                        <textarea class="input" id="address" name="Address" required autocomplete="off"></textarea>
                        <error-output class="address-error" for="text"></error-output>
                    </div>
                    <div class="row-content-exp">
                        <div class="oneRow-content">
                            <label class="label text" for="state">State</label>
                            <select id="sts" name="stt" class="form-control select-input getState" required><option value="0">Select State</option>
                                <option value="Karnataka">Karnataka</option></select>
                        </div>
                        <div class="oneRow-content">
                            <label class="label text" for="city">City</label>
                            <select id="state" class="form-control select-input getCity" required>
                                <option value="0">Select City</option>
                                <option value="Bangalore">Bangalore</option></select>
                        </div>
                        <div class="zip-container">
                            <label class="label text" for="zip">Zip</label>
                            <input class="input" type="text" name="Zip" id="zip" required autocomplete="off"></input>
                            <error-output class="zipcode-error" for="text"></error-output>
                        </div>
                    </div>

                    <div class="submit-reset-container">
                        <button type="submit" class="button submitButton" id="submitButton">Add</button>
                        <button type="button" onclick= "resetForm" class="button">Reset</button>
                    </div>
                </form>
            </div>

        </body>

    )
}

export default AddressBookForm;