import React, { useRef, useState } from "react";
import './Clock.css';

const Clock = () => {

    const hourInputRef = useRef(null);
    const minInputRef = useRef(null);


    const [period, setPeriod] = useState(""); // 오전/오후
    const [hour, setHour] = useState(""); // 시
    const [min, setMin] = useState(""); // 분
    const [selectedNum, setSelectedNum] = useState(null); // 선택된 숫자
    const [siOrBunBtn, setSiOrBunBtn] = useState(""); // 시침/분침
    const [validationMessage, setValidationMessage] = useState("");
    const [isHidden,setIsHidden] = useState(true);
    const [selectedHour, setSelectedHour] = useState(null);
    const [selectedMin, setSelectedMin] = useState(null);
    // 오전/오후 변경
    const handlePeriodChange = (newPeriod) => { 
        setPeriod(newPeriod);
    };

    // 시간 입력
    const handleHourChange = (e) => {
        const value = e.target.value;
        if (value === "" || (Number(value) >= 1 && Number(value) <= 12)) {
            setHour(value);
        }
    };

    // 분 입력
    const handleMinChange = (e) => {
        const value = e.target.value;
        if (value === "" || (Number(value) >= 0 && Number(value) <= 59)) {
            setMin(value);
        }
    };

    // 입력된 시간과 현재 시간 비교
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

        // 기존 클래스 제거
        hourInput.classList.remove("green", "red");
        minInput.classList.remove("green", "red");

        // 조건에 따라 클래스 추가
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


        // 메시지 설정
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



    // 시침 버튼 클릭
    const handleHourButtonClick = () => {
        setSiOrBunBtn("hour");
    };

    // 분침 버튼 클릭
    const handleMinButtonClick = () => {
        setSiOrBunBtn("min");
    };

    // 시계 숫자 버튼 클릭
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
                        if ( i === 0 ? 60 : i); // 12시 방향의 value를 60으로 설정
                        const displayValue =
                            adjustedValue % 5 === 0
                                ? adjustedValue / 5 === 12
                                    ? 12
                                    : adjustedValue / 5
                                : "."; // 점 표시

                        return (
                            <button
                                key={adjustedValue}
                                className={`dot
                                            ${selectedHour === adjustedValue ? "click-hour" :""} 
                                            ${selectedMin === adjustedValue  ?"click-min": ""}`}
                                style={{
                                    transform: `rotate(${i * 6}deg) translate(0px, -115px)`,
                                }}
                                value={adjustedValue} // 버튼의 value 설정
                                onClick={() => handleCircleClick(adjustedValue)} // 클릭 이벤트
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
