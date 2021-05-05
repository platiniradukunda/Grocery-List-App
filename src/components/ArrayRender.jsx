import React, { Component } from 'react';
import groceryList from '../groceries/groceryList';

class ArrayRender extends Component {
    constructor() {
        super();

        this.state = {
            groceryItems: groceryList,
        }
    }
    render() {
        return (
            <div>
                <ul>
                {this.state.groceryItems.map( (groceryPosition,i) => {
                    return <li key={i}>Item: {groceryPosition.item} | Quantity: {groceryPosition.quantity} | Units: {groceryPosition.units}</li>
                        
                })}     
                </ul>
                
            </div>
        );
    }
}

export default ArrayRender;