import React, { Component } from 'react';
import { Table } from 'reactstrap';
class CartItem extends Component {
    render() {
        let cart = this.props.cart; 
        return (
            <div>
                 <Table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Unit Price</th>
            <th>Units</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>{

this.props.cart.map((item)=>
                        {
                        return (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.price} {item.currency}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price * item.quantity} {item.currency}</td>
                            </tr>
                        );
                         })
        }
        
        
        </tbody>
      </Table>
            </div>
        );
    }
}

export default CartItem;