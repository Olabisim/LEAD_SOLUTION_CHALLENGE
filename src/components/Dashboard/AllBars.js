import React from "react";
import Bar from './Bar';
import '../styles/Dashboard.css';


const AllBars = () => {
        return (
                <div style={{display: 'flex', alignItems: 'flex-end'}}>
                
                <div className="space_bar">
                        <span><Bar height="higher" /></span>
                        <p>jan</p>
                </div>
                <div className="space_bar">
                        <span><Bar height="high" /></span>
                        <p>feb</p>
                </div>
                <div className="space_bar">
                        <span><Bar height="low" /></span>
                        <p>mar</p>
                </div>
                <div className="space_bar">
                        <span><Bar height="higher" /></span>
                        <p>apr</p>
                </div>
                <div className="space_bar">
                        <span><Bar height="highest" /></span>
                        <p>may</p>
                </div>
                <div className="space_bar">
                        <span><Bar height="higher" /></span>
                        <p>jun</p>
                </div>
                <div className="space_bar">
                        <span><Bar height="high" /></span>
                        <p>aug</p>
                </div>
                <div className="space_bar">
                        <span><Bar height="low" /></span>
                        <p>sept</p>
                </div>
                <div className="space_bar">
                        <span><Bar height="high" /></span>
                        <p>sept</p>
                </div>
                <div className="space_bar">
                        <span><Bar height="higher" /></span>
                        <p>nov</p>
                </div>


                </div>
        )
}

export default AllBars;