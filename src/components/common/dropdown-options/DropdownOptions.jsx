import React from 'react'
import './DropdownOptions.css'
const DropdownOptions = ({label, options}) => {
    return (
        <div className="dropdown">
            <button className="dropbtn">{label}</button>
            <div className="dropdown-content">
                {options.map((item, index) => {
                    console.log(item);
                    return <a className='dropDown-option-anchor' key={index} href="#">{item.text}</a>
                })}
            </div>
        </div>
    )
}

export default DropdownOptions