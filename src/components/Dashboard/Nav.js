import React from 'react'


const Nav = () => {
        return (
                <div style={{display: "flex"}}>
                        <h2>Dashboard</h2>

                        <div>
                        
                                <input type="text" placeholder='Search here....' />
                                <span>+</span>
                        </div>

                        <div>
                                <img src="../../bell.png" alt="bell" />
                                <img src="../../settings.png" alt="settings" />
                        </div>
                </div>
        )
}

export default Nav;