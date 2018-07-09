import React, { Component } from 'react';
import { CardColumns,Container, Row, CardGroup,CardDeck
     } from 'reactstrap';
import ProductDetail from  './ProductDetail';

class ProductList extends Component {
  
    
   

    render() {
        
        return (
            <Container className="store">             
                    
                    {
                        this.props.items.map((item)=>
                        {
                        return <ProductDetail  details={item} addToCart={this.props.addToCart}/>
                         })
                    }                                     
                
    </Container>

                
            
        );
    }
}

export default ProductList;