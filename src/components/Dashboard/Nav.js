import React from 'react'
import '../styles/nav.css'


const Nav = () => {
        return (
                <div className="root_nav"> 
                        <h2>Dashboard</h2>

                        <div className='inner_root_nav'>
                                <div>
                                
                                        <span>
                                                <img src='../../../search.png' alt="search" />
                                        </span>
                                        <input type="text" placeholder='Search here....' />
                                </div>
                                <span>+</span>
                        </div>

                </div>
        )
}

export default Nav;

