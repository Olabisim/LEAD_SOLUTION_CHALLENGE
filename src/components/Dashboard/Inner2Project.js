import React from 'react'
import AllBars from './AllBars';
import '../styles/Inner2Project.css';

const Inner2Project = () => {
        return (
                <div className='root_Inner2Project'>
                        <br />
                        <br />
                        <div className='root_Inner2Project_1'>
                                <div className='root_Inner2Project_1_2'>
                                        <div className='root_Inner2Project_1_2_1'>

                                                <img src="../../../arrow_down.png" alt="call" />
                                                <img src="../../../circle_orange.png" alt="call" />
                                        
                                        </div>
                                        <div className='root_Inner2Project_1_2_2'>
                                                <p>Task Remaining</p>
                                                <h2>12/15</h2>
                                        </div>
                                </div>
                                <div className='root_Inner2Project_1_2'>
                                        <div className='root_Inner2Project_1_2_1'>
                                        
                                                <img src="../../../arrow_up.png" alt="call" />
                                                <img src="../../../circle_green.png" alt="call" />
                                        </div>
                                        <div className='root_Inner2Project_1_2_2'>
                                                <p>Task Left</p>
                                                <h2>12/15</h2>
                                        </div>
                                
                                </div>
                                <div className='root_Inner2Project_1_2'>
                                        <div className='root_Inner2Project_1_2_1'>
                                        
                                                <img src="../../../arrow_down.png" alt="call" />
                                                <img src="../../../circle_red.png" alt="call" />
                                        </div>
                                        <div className='root_Inner2Project_1_2_2'>
                                                <p>Task Done</p>
                                                <h2>12/15</h2>
                                        </div>
                                
                                </div>
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