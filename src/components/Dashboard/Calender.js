import React from 'react'
import CalenderSetup from './calender_work/CalenderSetUp'
import '../styles/Calender.css'


const Calender = () => {
        return (
                <div className='root_calender'>
                        <div className='root_calender_1'>
                                <div className="root_calender_1_drop"></div>
                                <img src="../../bell.png" alt="bell" />
                                <img src="../../settings.png" alt="settings" />
                                
                        </div>
                        <div className='root_calender_2'>
                                <img src="../../avatar_makata_vespa_04.png" alt="avatar" />
                                <div>
                                
                                        <h2>Try PRO version</h2>
                                        <p>Unlock full power of calender
                                        For 2 weeks for free!</p>
                                </div>
                        </div>

                        <div>
                                <CalenderSetup />
                        </div>

                        <div className='root_calender_3'>
                                <div className='root_calender_3_1'>
                                        <div>
                                        
                                                <p>Project Manager</p>
                                                <h2>Client Meeting</h2>
                                        </div>
                                        <div className='root_calender_3_1_2'>
                                                <h3>+ NEW</h3>
                                                
                                        </div>
                                </div>
                                <div className='root_calender_3_2'>
                                        <div>
                                                <span className='root_calender_3_2_span_1'>
                                                        <img src="../../../call.png" alt="call" />
                                                </span>
                                                <span className='root_calender_3_2_span_2'>Swipe To Call</span>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Calender;