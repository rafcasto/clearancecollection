import React, { Component } from 'react';

import ProductList from './ProductList'

class Content extends Component {

    render() {
        
        return (
            <div>
                <br />
                          
                
                  <ProductList items={this.props.items} addToCart={this.props.addToCart}/>                
                
                <br />
            </div>
        );
    }
}

export default Content;