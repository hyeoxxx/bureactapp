import './Cube.css';
import React from 'react';
const Cube = (props) => {
    const x = props.x;
    const y = props.y;
    const z = props.z;
    const style = {
        transform: `translate3d(${x * 50}px, ${y * 50}px, ${z * 50}px)`,
    }
    return (
        <div className="cube" style={style}
            onClick={props.onClickMethod}>
            <div className="face top" style={props.color ? { backgroundColor: props.color } : {}}></div>
            <div className="face front" style={props.color ? { backgroundColor: props.color } : {}}></div>
            <div className="face right" style={props.color ? { backgroundColor: props.color } : {}}></div>
            <div className="face left" style={props.color ? { backgroundColor: props.color } : {}}></div>
            <div className="face bottom" style={props.color ? { backgroundColor: props.color } : {}}></div>
        </div>
    )
}

export default Cube;