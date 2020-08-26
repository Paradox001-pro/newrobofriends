import React from 'react';
import './SearchBox.css'

const Searchbox = (props) => {
    return (
        <div className='pa2 input'>
        <input 
        type='text'
         placeholder='Search A Friend'
         onChange={ props.onSearchChange}
         />
    </div>
    )
}

export default Searchbox;