import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,Col,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import ShoppingCart from 'react-icons/lib/ti/shopping-cart';

import Counter from './Counter';
class ProductDetail extends Component {
    constructor(props){
        super(props);
        this.addToCart = this.addToCart.bind(this);
        this.updateQuantity = this.updateQuantity.bind(this);
        this.state = {
            isAdded:false,
            quantity:1
        }
    }
     
     updateQuantity(quantityParam){
        this.setState({
            quantity:quantityParam
        })
     }
     addToCart () {         
        if(this.state.isAdded){return}
        this.props.details.quantity = this.state.quantity;
        this.props.addToCart(this.props.details);
        this.setState({
            isAdded: true,
            
        }, function(){
            setTimeout(() => {
                this.setState({
                    isAdded: false
                });
            }, 3500);
        });
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
          
          <Counter item={item} updateQuantity={this.updateQuantity}/>
       <Button outline color="warning" onClick={this.addToCart}>
         
         {this.state.isAdded? "ADDED" : "ADD TO CART"}
          <ShoppingCart size={30} color="orange" />
           </Button>{' '}</center>

        </CardBody>
      </Card>
            </div>
        );
    }
}

export default ProductDetail;