import React from 'react'
import CalenderSetup from './calender_work/CalenderSetUp'


const Calender = () => {
        return (
                <div>
                        <div>
                        
                                <img src="../../bell.png" alt="bell" />
                                <img src="../../settings.png" alt="settings" />
                                
                        </div>
                        <div>
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

                        <div>
                                <div>
                                        <div>
                                        
                                                <p>Project Manager</p>
                                                <h2>Client Meeting</h2>
                                        </div>
                                        <div>
                                                <h3>+ NEW</h3>
                                                
                                        </div>
                                </div>
                                <div>
                                
                                </div>
                        </div>
                </div>
        )
}

export default Calender;