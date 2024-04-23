import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"
import DropdownOptions from "../dropdown-options/DropdownOptions"

const Header = () => {
  const [navList, setNavList] = useState(false)

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo w-15 h-15' >
            <img src='./images/logowithout.png' className="" alt='' />
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => {
                console.log(list);
                if (list.children) {
                  return <li key={index}>
                    <Link to={list.path}>
                    
                      <DropdownOptions label = {list.text} options = {list.children}/>
                    </Link>
                  </li>

                }
                return <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              }

              )}
            </ul>
          </div>
          <div className='button flex'>
            <h4>
              <span>2</span> My List
            </h4>
            <button className='btn1'>
              <i className='fa fa-sign-out'></i> Sign In
            </button>
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
