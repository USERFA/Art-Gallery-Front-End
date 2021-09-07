import React from 'react';
import reactDom from 'react-dom';
import './Products.css';
import { Button } from 'react-bootstrap';
import { Route, Router } from 'react-router-dom';
import Order from './Order';
function Products() {

    return (
        <div className='products'>
            <div className='wrapper'>
                <Card img="https://th.bing.com/th/id/OIP.6Uy9QBWWpsCC_MLk0WOJsAHaEc?pid=ImgDet&rs=1" title="Modern art" description="Try ro to admire what this painting is trying to say" price="100000 MAD" />
                <Card img="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" title="Flower art" description="Try ro to admire what this painting is trying to say" price="100000 MAD" />
                <Card img="https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" title="Modern art" description="Try ro to admire what this painting is trying to say" price="100000 MAD" />
                <Card img="https://images.unsplash.com/photo-1589030343991-69ea1433b941?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" title="Modern art" description="Try ro to admire what this painting is trying to say" price="100000 MAD" />
                <Card img="https://images.unsplash.com/photo-1554188248-986adbb73be4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" title="Modern art" description="Try ro to admire what this painting is trying to say" price="100000 MAD" />
                <Card img="https://images.unsplash.com/photo-1523554888454-84137e72c3ce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" title="Modern art" description="Try ro to admire what this painting is trying to say" price="100000 MAD" />
                <Card img="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" title="Modern art" description="Try ro to admire what this painting is trying to say" price="100000 MAD" />
                <Card img="https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFpbnRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" title="Modern art" description="Try ro to admire what this painting is trying to say" price="100000 MAD" />
                <Card img="https://images.unsplash.com/photo-1531489956451-20957fab52f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBhaW50aW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" title="Modern art" description="Try ro to admire what this painting is trying to say" price="100000 MAD" />
                <Card img="https://images.unsplash.com/photo-1602464729960-f95937746b68?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWJzdHJhY3QlMjBwYWludGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" title="Modern art" description="Try ro to admire what this painting is trying to say" price="100000 MAD" />
                <Card img="https://images.unsplash.com/photo-1541542509806-6371b7b0a265?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YWJzdHJhY3QlMjBwYWludGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" title="Modern art" description="Try ro to admire what this painting is trying to say" price="100000 MAD" />
                <Card img="https://images.unsplash.com/photo-1579964789722-634d353d7f89?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHBhaW50aW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" title="Modern art" description="Try ro to admire what this painting is trying to say" price="100000 MAD" />

            </div>
        </div>
    );
}
function Card(props) {
    return (
        <div className="card">
            <div className="card__body">
                <img src={props.img} className="card__image" />
                <h2 className="card__title">{props.title}</h2>
                <p className="card___description">{props.description}</p>
                <h3 className="card__price">{props.price}</h3>
            </div>
            <a href="/order" target="_parent">
                <Button className='card__btn'>Purchase painting</Button>
            </a>
        </div>
    )
}
export default Products;

