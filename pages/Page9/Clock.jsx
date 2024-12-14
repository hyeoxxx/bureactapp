import React, { useRef, useState } from "react";
import './Clock.css';

const Clock = () => {

    const hourInputRef = useRef(null);
    const minInputRef = useRef(null);


    const [period, setPeriod] = useState(""); 
    const [hour, setHour] = useState(""); 
    const [min, setMin] = useState(""); 
    const [selectedNum, setSelectedNum] = useState(null); 
    const [siOrBunBtn, setSiOrBunBtn] = useState("");
    const [validationMessage, setValidationMessage] = useState("");
    const [isHidden,setIsHidden] = useState(true);
    const [selectedHour, setSelectedHour] = useState(null);
    const [selectedMin, setSelectedMin] = useState(null);
    
    const handlePeriodChange = (newPeriod) => { 
        setPeriod(newPeriod);
    };

    
    const handleHourChange = (e) => {
        const value = e.target.value;
        if (value === "" || (Number(value) >= 1 && Number(value) <= 12)) {
            setHour(value);
        }
    };

    
    const handleMinChange = (e) => {
        const value = e.target.value;
        if (value === "" || (Number(value) >= 0 && Number(value) <= 59)) {
            setMin(value);
        }
    };

    
    const checkTime = () => {
        const today = new Date();
        let currentHour = today.getHours();
        const currentMin = today.getMinutes();
        let currentPeriod = "AM"

        // 12시간제로 변환
        if (currentHour > 12) {
            currentHour = currentHour - 12;
            currentPeriod = "PM";
        }


        const hourInput = hourInputRef.current;
        const minInput = minInputRef.current;

        
        hourInput.classList.remove("green", "red");
        minInput.classList.remove("green", "red");

        
        if (Number(hour) === currentHour) {
            hourInput.classList.add("green");
        } else {
            hourInput.classList.add("red");
        }

        if (Number(min) === currentMin) {
            minInput.classList.add("green");
        } else {
            minInput.classList.add("red");
        }


        
        if (
            hourInput.classList.contains("green") &&
            minInput.classList.contains("green")&&
            period === currentPeriod
        ) {
            setValidationMessage(
                `올바른 시간(${period}${hour}:${min})입니다.\n 시침과 분침을 차례로 클릭하여 옆에 시계에 올바른 시간을 입력하세요`

            );
            // console.log(validationMessage);
            setIsHidden(false);


        } else {
            setValidationMessage("정확한 현재의 시간을 입력하세요.");
            console.log(validationMessage);
            setIsHidden(true);
        }

    };



    
    const handleHourButtonClick = () => {
        setSiOrBunBtn("hour");
    };

    
    const handleMinButtonClick = () => {
        setSiOrBunBtn("min");
    };

    
    const handleCircleClick = (num) => {
        setSelectedNum(num);

        if (siOrBunBtn === "hour") {
            const adjustedHour = num / 5 === 0 ? 12 : num / 5; // 0 → 12시로 변환
            if (parseInt(hour) === adjustedHour) {
                alert("입력된 시간과 일치합니다!");
                setSelectedHour(num);

            } else {
                alert("입력된 시간과 다릅니다!");
            }
        } else if (siOrBunBtn === "min") {
            if (parseInt(min) === num) {
                alert("입력된 분과 일치합니다!");
                setSelectedMin(num)
            } else {
                alert("입력된 분과 다릅니다!");
            }
        } 
        else {
            alert("시침 또는 분침 버튼을 먼저 선택하세요.");
        }
    };

    return (
        <div className="clock-container">
            <div className="right-side">
                <div className="input-time-area">
                    <div className="am-pm-btn">
                        <button
                            type="button"
                            onClick={() => handlePeriodChange("AM")}
                            className={`nonClick ${period === "AM" ? "active click" : ""}`}
                        >
                            오전
                        </button>
                        <button
                            type="button"
                            onClick={() => handlePeriodChange("PM")}
                            className={`nonClick ${period === "PM" ? "active click" : ""}`}
                        >
                            오후
                        </button>
                    </div>

                    <div className="hm-area">
                        <div className="hour-div">
                            <input
                                type="number"
                                ref={hourInputRef}
                                className="hm-input"
                                placeholder="시간 입력"
                                value={hour}
                                onChange={handleHourChange}
                            />
                            <span>시</span>
                        </div>
                        <div className="min-div">
                            <input
                                type="number"
                                ref={minInputRef}
                                className="hm-input"
                                placeholder="분 입력"
                                value={min}
                                onChange={handleMinChange}
                            />
                            <span>분</span>
                        </div>
                    </div>
                </div>

                <div className="click-area">
                    <button
                        id="hour-btn"
                        onClick={handleHourButtonClick}
                        className={siOrBunBtn === "hour" ? "active click" : ""}
                    >
                        시침
                    </button>
                    <button
                        id="min-btn"
                        onClick={handleMinButtonClick}
                        className={siOrBunBtn === "min" ? "active click" : ""}
                    >
                        분침
                    </button>

                    <button 
                        id="time-check-btn"
                        onClick={checkTime}>확인</button>
                </div>

                <p>{validationMessage}</p>
            </div>

            <div className={`left-side ${isHidden?"hidden":""}`}>
                <div className="circle">
                    {Array.from({ length: 60 }, (_, i) => {
                        const adjustedValue = i ;
                        if ( i === 0 ? 60 : i); 
                        const displayValue =
                            adjustedValue % 5 === 0
                                ? adjustedValue / 5 === 12
                                    ? 12
                                    : adjustedValue / 5
                                : "."; 

                        return (
                            <button
                                key={adjustedValue}
                                className={`dot
                                            ${selectedHour === adjustedValue ? "click-hour" :""} 
                                            ${selectedMin === adjustedValue  ?"click-min": ""}`}
                                style={{
                                    transform: `rotate(${i * 6}deg) translate(0px, -115px)`,
                                }}
                                value={adjustedValue}
                                onClick={() => handleCircleClick(adjustedValue)} 
                            >
                                {displayValue}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Clock;
