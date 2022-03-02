import React from "react";



const Bar = ({height}) => {
        return (
                <>
                       <div>
                                {
                                height === "low"
                                &&
                                <img src="../../low.png" alt='bar' />
                                }
                                {
                                height === "high"
                                &&
                                <img src="../../high.png" alt='bar' />
                                }
                                {
                                height === "higher"
                                &&
                                <img src="../../higher.png" alt='bar' />
                                }
                                {
                                height === "highest"
                                &&
                                <img src="../../highest.png" alt='bar'  />
                                }
                                {
                                height === "sept"
                                &&
                                <img src="../../sept.png" alt='bar'  />
                                }
                       </div> 
                </>
        )
}

export default Bar;