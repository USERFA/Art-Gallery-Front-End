import React from 'react';
import { Form } from 'react-bootstrap';
import './Order.css';
import {Button, Col, Card} from 'react-bootstrap';

function Order() {
    return (
        <div>
            <div className="order_info">
                <h1>Order delivery :</h1>
                At the finalization and confirmation of your order, the delivery is:
                <section>
                <ul class="list">
                    <li> At 200 MAD, for any purchase less than 10000 MAD;</li>
                    <li>At 150 MAD, for any purchase between 35000 MAD and 20000MAD;</li>
                    <li>Free, for any purchase of 400000 MAD</li>
                </ul>
                </section>
            </div>
            <div className="form__order">            
                <Form>  
                    <label for="fname">First Name:</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                    <label for="lname">Last Name:</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                    <label for="ad">Address:</label>
                    <input type="text" id="ad" name="address" placeholder="Your address.." />
                    <label for="pn">Phone number:</label>
                    <input type="text" id="pn" name="phone" placeholder="Your phone number.." />
                    <label for="e">Email:</label>
                    <input type="text" id="e" name="email" placeholder="Your email address.." />
                    <input type="submit" value="Submit" />
                </Form>
            </div>
        </div>
    );
}

export default Order;
