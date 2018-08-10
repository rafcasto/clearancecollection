import React, { Component } from 'react';
import ShoppingCart from 'react-icons/lib/ti/shopping-cart';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink,Badge } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import CartItem from './CartItem'
class Cart extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

    render() {
      
      let totalItems = this.props.totalItems;
    
        return (


<div >

        <Nav className="fixed-top" >
        <DropdownItem></DropdownItem>
          <Dropdown  nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
            <div className="circle-badge" >
            <ShoppingCart  size={30} color="purple" /> ({totalItems}) 
          </div>
            
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header><CartItem cart={this.props.cart} /> </DropdownItem>
              
              <DropdownItem>Check Out</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          
        </Nav>
        
      </div>
        );
    }
}

export default Cart;