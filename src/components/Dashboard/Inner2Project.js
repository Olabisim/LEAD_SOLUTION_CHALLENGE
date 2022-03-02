import React from 'react'
import AllBars from './AllBars';
import '../styles/Inner2Project.css';

const Inner2Project = () => {
        return (
                <div className='root_Inner2Project'>
                        <div>
                                <img scr="../../../circle_green.png" alt="circle" />
                                <img scr="../../trial2.png" alt="trial2" />
                                <img scr="../../trial3.png" alt="trial3" />
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