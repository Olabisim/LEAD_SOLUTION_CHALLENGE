import React from 'react'
import Main from './Main';
import Calender from './Calender';


const Dashboard = () => {
        return (
                // <div style={{paddingLeft: '25px'}}>
                <div style={{display: 'flex'}}>
                        <Main />
                        <Calender />
                </div>
        )
}

export default Dashboard;