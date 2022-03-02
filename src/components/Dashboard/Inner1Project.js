import React from 'react'
import AppDesign from './AppDesign'



const Inner1Project = () => {
        return (
                <>
                
                <div style={{display: 'flex'}}>
                        <h2>Ongoing Projects</h2>
                        <div>
                                <ul>
                                        <li>Remaining</li>
                                        <li>Ongoing</li>
                                        <li>Completed</li>
                                </ul>
                        </div>
                </div>
                
                <div>
                        <div>
                                <AppDesign name="App Design" date="17 Augist, 2021" /> 
                                <AppDesign name="App Design" date="17 Augist, 2021" /> 
                                <AppDesign name="App Design" date="17 Augist, 2021" /> 
                        </div>
                        <div>

                                <div>
                                        <img src="../../Ellipse_91.png" alt="pic 1" />
                                        <img src="../../Ellipse_92.png" alt="pic 2" />
                                        <img src="../../Ellipse_93.png" alt="pic 3" />
                                </div>
                        
                                <div>
                                
                                </div>
                        </div>
                        
                </div>
                <div>
                        <div><span></span> todo</div>
                        <div><span></span> inprogress</div>
                        <div><span></span> completed</div>
                
                </div>
                </>
        )
}

export default Inner1Project;