import React from "react";
import './Answers.css'

const Answers = ({singleAnswer, getNewAnswer}) => {
    return (
        <div>
            <div className="ball-container">
            <div className="ball-black-outer">
                <div className="ball-white-inner">
                <div>
                    <p className="answer">{singleAnswer}</p>
                </div>
                </div>
            </div>
            </div>
            <button onClick={getNewAnswer}>Click for an Answer</button>
        </div>
        
    )
}





export default Answers;