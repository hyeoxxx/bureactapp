import React from "react";

function TitleComponent (props) {
    const title = 
    <div className="title-div">

        <div className="title-icon">
            <img src={props.icon} alt="아이콘" className="icon"/>
            <p className="icon-content">{props.iconContent}</p>
        </div>

        <div className="title-content">
            <pre>{props.titleContent}</pre>
        </div>

    </div>

    return (title);
}

export default TitleComponent;