import React from "react";
import Bar from './Bar';


const AllBars = () => {
        return (
                <div style={{display: 'flex'}}>
                
                <div>
                        <span><Bar height="higher" /></span>
                        <p>jan</p>
                </div>
                <div>
                        <span><Bar height="high" /></span>
                        <p>feb</p>
                </div>
                <div>
                        <span><Bar height="low" /></span>
                        <p>mar</p>
                </div>
                <div>
                        <span><Bar height="higher" /></span>
                        <p>apr</p>
                </div>
                <div>
                        <span><Bar height="highest" /></span>
                        <p>may</p>
                </div>
                <div>
                        <span><Bar height="higher" /></span>
                        <p>jun</p>
                </div>
                <div>
                        <span><Bar height="high" /></span>
                        <p>aug</p>
                </div>
                <div>
                        <span><Bar height="low" /></span>
                        <p>sept</p>
                </div>
                <div>
                        <span><Bar height="high" /></span>
                        <p>sept</p>
                </div>
                <div>
                        <span><Bar height="higher" /></span>
                        <p>nov</p>
                </div>


                </div>
        )
}

export default AllBars;