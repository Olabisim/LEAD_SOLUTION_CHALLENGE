import React from 'react'
import Projects from './Projects';
import Calender from './Calender';


const Main = () => {
        return (
                <div style={{display: 'flex'}}>
                        <Projects />
                        <Calender />
                </div>
        )
}

export default Main;