import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Minus from 'react-icons/lib/ti/minus';
import Plus from 'react-icons/lib/ti/plus';
class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {value:this.props.item.quantity}
      this.incrementScore =  this.incrementScore.bind(this);
      this.decrementScore = this.decrementScore.bind(this);
      this.getQuantity = this.getQuantity.bind(this);
      
    }
     incrementScore () {
        this.updateStateValue(this.state.value +1);
        this.props.item.quantity= this.state.value + 1
        
        
        this.props.updateQuantity(this.state.value+1);

    }

    componentDidMount(){
        this.props.updateQuantity(this.state.value);


    }

    updateStateValue(valueUpdated){
        this.setState({
            value :valueUpdated
        })
    }


    componentDidMount(){
        
    }

     decrementScore () {
        this.props.item.quantity= this.props.item.quantity - 1
    }

    getQuantity(){
        
        return this.state.value;
    }    

    render() {
        

        
        return (
            
        <div className="counter">
        
        <Row>
            <Col sm="4" >
            
            <button className="btn btn-light btn-lg" onClick={this.decrementScore}> <Minus size={30} color="orange" />  </button>
            </Col>
            <Col sm="4"><div className="counter-score"> {this.state.value } </div></Col>
            <Col sm="4"><button className="btn btn-light btn-lg" onClick={this.incrementScore}> 
            <Plus size={30} color="orange" /> 
             </button></Col>
        </Row>
        
        
        
        <br/>
        <br/>
      </div>
            
        );
    }
}

export default Counter;