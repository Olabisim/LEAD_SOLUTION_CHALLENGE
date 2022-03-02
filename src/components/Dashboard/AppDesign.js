import React from 'react'
import '../styles/appdesign.css'


const AppDesign = ({name, date, color}) => {
        return (
                <div className={
                        color === 'blue'
                        ?
                        `appdesign_root appdesign_root_blue`
                        :
                        color === 'red'
                        ?
                        `appdesign_root appdesign_root_red`
                        :
                        `appdesign_root appdesign_root_orange`

                        }>
                        <h2>{name}</h2>
                        <span>{date}</span>
                </div>
        )
}

export default AppDesign;


// <div className='appdesign_root appdesign_root_blue'>