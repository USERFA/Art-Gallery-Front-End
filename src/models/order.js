import { Button } from "react-bootstrap";
import React from "react";
import { Card, Col, Form } from "react-bootstrap";
import axios from "axios";

export class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.OrderChange = this.OrderChange.bind(this);
        this.submitOrder = this.submitOrder.bind(this);
    } 
    initialState = {
        id: '',
        clientadress: '',
        clientemail: '',
        totalprice: ''
    }
    resetOrder = () => {
        this.setState(() => this.initialState);
    }
    submitOrder = event => {
        event.preventDefault();
        const o = {
            id: this.state.id,
            clientemail: this.state.clientemail,
            clientadress: this.state.clientadress,
            totalprice: this.state.totalprice
        };
    }
    OrderChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    componetDidMount() {
        axios.post("http:localhost:8022/order", this.o).
            then(response => {
                if (response.data != null) {
                    this.setState(this.initialState);
                    alert("Order Saved successfully !")
                }
            })
    }
    render() {
        return (
            <Form onReset={this.resetOrder} onSubmit={this.submitOrder} id="OrderFormId">
                <Card.Body>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridMarque">
                            <Form.Label> Id: </Form.Label>
                            <Form.Control required name="id" type="int" value={this.state.id} onChange={this.OrderChange} placeholder="Input your order ID" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridMarque">
                            <Form.Label> Client address: </Form.Label>
                            <Form.Control name="clientadress" type="text" value={this.state.clientadress} onChange={this.OrderChange} placeholder="Enter your address" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridMarque">
                            <Form.Label> Client email: </Form.Label>
                            <Form.Control name="clientemail" type="text" value={this.state.clientemail} onChange={this.OrderChange} placeholder="Enter your email address" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridMarque">
                            <Form.Label>Total price: </Form.Label>
                            <Form.Control name="totalprice" type="float" value={this.state.totalprice} onChange={this.OrderChange} placeholder="Total price" />
                        </Form.Group>
                    </Form.Row>
                </Card.Body>
                <Card.Footer style={{ "textAlign": "right" }}>
                    <Button type="submit">Submit</Button>
                    <Button type="reset">Reset</Button>
                </Card.Footer>
            </Form>
        );
    }
}
export default Order;
