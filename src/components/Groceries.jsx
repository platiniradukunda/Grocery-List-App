import React, { Component } from 'react';
import groceryList from '../groceries/groceryList';
import ArrayRender from './ArrayRender';

class Groceries extends Component {
    constructor(){
        super();
        this.state = {
            item: '',
            brand: '',
            units: '',
            quantity: '',
            isPurchased: false, 
        }
    }
    // this function grabs the user item input and sends it into state
    changeItemInput=(input)=>{
        this.setState({
            // the item is now equal to what is passed in the input box
            item: input,
        }
        )
    }
    // this function grabs the user quantity input and sends it into state
    changeQuantityInput=(input)=>{
        this.setState({
            // the quantity is now equal to what is passed in the input box
            quantity: input,
        }
        )
    }
    // this function grabs the user units input and sends it into state
    changeUnitsInput=(input)=>{
        this.setState({
            // the units is now equal to what is passed in the input box
            units: input,
        }
        )
    }
    // function to add my current state as another object into my groceryList array
    addToList = () => {
        groceryList.push(this.state);
        console.log(groceryList)
        return <ul>{groceryList[(groceryList.length-1)].item}</ul>
    }

    
        

    render() {
       
        return (
            
            <div> 
                <h1>Grocery List</h1>
                <input type="text" value={this.state.item} placeholder="Enter Item Here" onChange={(event)=>{this.changeItemInput(event.target.value)}}/>
                <input type="text" value={this.state.quantity} placeholder="Enter Quantity Here" onChange={(event)=>{this.changeQuantityInput(event.target.value)}}/>
                <input type="text" value={this.state.units} placeholder="Enter Units Here" onChange={(event)=>{this.changeUnitsInput(event.target.value)}}/>
                <button onClick={()=> this.addToList()}>Add to grocery list</button>
                {this.state.item}
        
            </div>
        );
    }
}

export default Groceries;