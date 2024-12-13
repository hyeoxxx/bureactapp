import React, { useState, forwardRef, useImperativeHandle } from "react";

const PictureComponent = forwardRef((props, ref) => {
    const [selectedButton, setSelectedButton] = useState("");

    const correctBtnMap = {
        red: "circle",
        orange: "triangle",
        green: "square",
        purple: "star",
    };

    const handleButtonClick = (btnType) => {
        setSelectedButton(btnType);
    };

    // 외부에서 정답 여부 확인 메서드 제공
    useImperativeHandle(ref, () => ({
        isCorrect: () => correctBtnMap[props.className] === selectedButton,
    }));

    return (
        <div className="pic-container">
            <img src={props.pic} alt="사진" className={props.className} />
            <div className="btn-container">
                <button
                    id="circleBtn"
                    className={`btn ${selectedButton === "circle" ? "selectde" : ""}`}
                    onClick={() => handleButtonClick("circle")}
                >
                    ●
                </button>
                <button
                    id="triangleBtn"
                    className={`btn ${selectedButton === "triangle" ? "selectde" : ""}`}
                    onClick={() => handleButtonClick("triangle")}
                >
                    ▲
                </button>
                <button
                    id="squareBtn"
                    className={`btn ${selectedButton === "square" ? "selectde" : ""}`}
                    onClick={() => handleButtonClick("square")}
                >
                    ■
                </button>
                <button
                    id="starBtn"
                    className={`btn ${selectedButton === "star" ? "selectde" : ""}`}
                    onClick={() => handleButtonClick("star")}
                >
                    ★
                </button>
            </div>
        </div>
    );
});

export default PictureComponent;
