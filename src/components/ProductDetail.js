import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,Col,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import ShoppingCart from 'react-icons/lib/ti/shopping-cart';


class ProductDetail extends Component {
    constructor(props){
        super(props);
        this.addToCart = this.addToCart.bind(this);
    }
     addToCart () {
         
        this.props.addToCart(this.props.details);
      }
    render() {
       
        let item = this.props.details; 
        return (
            <div className={'prod prod-' + item.id}>
                <Card>
                
        <CardImg top width="50px"  src={item.url} alt="Card image cap" />
        <CardBody>
        <center>
        <CardTitle>{item.name}</CardTitle>
          <CardTitle>{item.price} {item.currency}</CardTitle>
          
       <Button outline color="warning" onClick={this.addToCart}>
         
         
         ADD TO CART <ShoppingCart size={30} color="orange" />
           </Button>{' '}</center>

        </CardBody>
      </Card>
            </div>
        );
    }
}

export default ProductDetail;