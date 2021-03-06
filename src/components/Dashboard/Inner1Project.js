import React from 'react'
import AppDesign from './AppDesign'
import '../styles/inner1project.css'
import ProgressBar from './ProgressBar'


const Inner1Project = () => {
        return (
                <div className='root_inner1project'>
                
                        <div className='root_inner1project_1'>
                                <h3>Ongoing Projects</h3>
                                <div>
                                        <ul>
                                                <li><a href="#remaining">Remaining</a></li>
                                                <li className='active'><a href="#ongoing">Ongoing</a></li>
                                                <li><a href="#completed">Completed</a></li>
                                        </ul>
                                </div>
                        </div>
                        
                        <div className='root_inner1project_2'>
                                <div className='root_inner1project_2_1'>
                                
                                        <div>
                                                <AppDesign name="App Design" date="17 Augist, 2021" color="blue" /> 
                                                <span>
                                                        <AppDesign name="App Design" date="17 Augist, 2021" color="red" /> 
                                                </span>
                                                <AppDesign name="App Design" date="17 Augist, 2021" /> 
                                        </div>
                                        <div>
                                                <div className='contain_img'>
                                                        <img src="../../Ellipse_91.png" alt="pic 1" />
                                                        <img src="../../Ellipse_92.png" alt="pic 2" />
                                                        <img src="../../Ellipse_93.png" alt="pic 3" />
                                                </div>
                                        
                                                <div>
                                                        <ProgressBar />
                                                
                                                </div>
                                        </div>
                                
                                </div>
                                <div className='root_inner1project_2_2'>
                                        <div className='last'>
                                                <img src="../../../todo.png" alt="todo" />
                                                <span>todo</span> 
                                                
                                        </div>

                                        <div className='last'>
                                        
                                        <img src="../../../inprogress.png" alt="completed" />
                                                <span>inprogress</span> 
                                        
                                        </div>
                                        <div className='last'>

                                        
                                        <img src="../../../completed.png" alt="inprogress" />
                                                <span>completed</span> 
                                        
                                        </div>
                                </div>
                        </div>

                </div>
        )
}

export default Inner1Project;