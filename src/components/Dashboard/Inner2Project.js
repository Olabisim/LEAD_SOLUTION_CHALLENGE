import React from 'react'
import AllBars from './AllBars';

const Inner2Project = () => {
        return (
                <div>
                        <div>
                                <img scr="../../../trial1.png" alt="trial1" />
                                <img scr="../../trial2.png" alt="trial2" />
                                <img scr="../../trial3.png" alt="trial3" />
                        </div>
                        <div>
                                <h2>Progress Stats</h2>
                                <ul>
                                        <li>day</li>
                                        <li>week</li>
                                        <li>month</li>
                                </ul>
                        </div>
                        <div>
                                <AllBars />
                        </div>
                </div>
        )
}

export default Inner2Project;