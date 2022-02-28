import React from "react";

const Button = ({ changePhases, color}) => {

    return (
        <div >
            <button onClick={changePhases} style={{background: color}}><i className="fa-solid fa-angle-right"></i></button>
        </div>
    );
};

export default Button;