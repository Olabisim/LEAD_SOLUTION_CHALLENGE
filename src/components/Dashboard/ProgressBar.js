import React from "react";
import '../styles/progressBar.css'

const ProgressBar = () => {

        return (
                <div>
                        <div className="progress" role="progressbar">
                                <div className="progress-inner">
                                        <div className="progress-indicator"></div>
                                        <div className="progress-indicator"></div>
                                </div>
                                <span className="progress-label">
                                        <strong>80</strong>
                                        <span>%</span>
                                </span>
                        </div>

                </div>
        )
}

export default ProgressBar;