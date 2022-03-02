import React from 'react'
import AllBars from './AllBars';
import '../styles/Inner2Project.css';

const Inner2Project = () => {
        return (
                <div className='root_Inner2Project'>
                        <br />
                        <br />
                        <div>
                                <img src="../../../trial1.png" alt="call" />
                                <img src="../../../trial2.png" alt="call" />
                                <img src="../../../trial3.png" alt="call" />
                        </div>
                        <div className='root_Inner2Project_2'>
                                <h2>Progress Stats</h2>
                                <ul className='root_Inner2Project_2_ul'>
                                        <li>day</li>
                                        <li>week</li>
                                        <li class="active">month</li>
                                </ul>
                        </div>
                        <div>
                                <AllBars />
                        </div>
                </div>
        )
}

export default Inner2Project;