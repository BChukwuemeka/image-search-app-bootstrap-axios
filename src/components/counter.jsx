import React, { Component } from 'react';
import Gallery from './gallery';



class Counter extends Component {
    state = { 
        count:0,
        imgUrl: this.props.src
     }; 
    render() { 
        return (
        <>
            <img src={this.state.imgUrl} alt='' />
            <span className='m-2'>{this.formatCount()}</span>
            <button className='m-2 btn btn-primary p-2'>Increment</button>
            
        </>);
    }
    formatCount () {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;