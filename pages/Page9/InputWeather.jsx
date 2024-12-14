import React, { useState } from "react";
import './InputWeather.css';

const InputWeather = () => {
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [date, setDate] = useState("");
    const [day, setDay] = useState("");
    const [validationMessage, setValidationMessage] = useState("");

    const [weather, setWeather] = useState("");

    const handleValidateToday = () => {


        const today = new Date(); 
        const currentYear = today.getFullYear();
        const currentMonth = today.getMonth() + 1; 
        const currentDate = today.getDate();
        const currentDay = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"][today.getDay()];

        const yearNum = parseInt(year.trim(), 10);
        const monthNum = parseInt(month.trim(), 10);
        const dateNum = parseInt(date.trim(), 10);

        if (!year || isNaN(yearNum) || yearNum !== currentYear) {
            setValidationMessage(`올바른 년도를 입력하세요.`);
            return;
        }
        if (!month || isNaN(monthNum) || monthNum !== currentMonth) {
            setValidationMessage(`올바른 월을 입력하세요.`);
            return;
        }
        if (!date || isNaN(dateNum) || dateNum !== currentDate) {
            setValidationMessage(`올바른 일을 입력하세요.`);
            return;
        }

        if (day.trim() !== currentDay) {
            setValidationMessage(`올바른 요일을 입력하세요.`);

            return;
        }

        setValidationMessage(`입력하신 날짜와 오늘의 날짜가 일치합니다. \n ${year}년 ${month}월 ${date}일 ${day}`);

    };

    const handleWeather = (value) => {
        setWeather(value); // 날씨 업데이트
    };

    return (
        <div className="div-container">
            <div className="input-weather-container1">
                <div className="input-weather-container2">
                <input
                    type="number"
                    id="year-input"
                    className="input-box"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    placeholder="년"
                />년
                <input
                    type="number"
                    id="month-input"
                    className="input-box"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    placeholder="월"
                />월
                <input
                    type="number"
                    id="date-input"
                    className="input-box"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="일"
                />일
                <input
                    type="text"
                    id="day-input"
                    className="input-box"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    placeholder="요일(월요일)"
                />요일
            </div>

            <div className="weather-btn-area">
                <button 
                    type="button" 
                    className={`weather-btn ${weather === "맑음" ? "w-active" : ""}`} 
                    onClick={() => handleWeather("맑음")}>
                    ☀️
                </button>
                <button 
                    type="button" 
                    className={`weather-btn ${weather === "구름" ? "w-active" : ""}`} 
                    onClick={() => handleWeather("구름")}>
                    ☁️
                </button>
                <button 
                    type="button" 
                    className={`weather-btn ${weather === "비" ? "w-active" : ""}`} 
                    onClick={() => handleWeather("비")}>
                    ☔
                </button>
                <button 
                    type="button" 
                    className={`weather-btn ${weather === "눈" ? "w-active" : ""}`} 
                    onClick={() => handleWeather("눈")}>
                    ☃️
                </button>
            </div>
        </div>

            <button 
                type="button" 
                onClick={handleValidateToday}
                className="check-btn">
                확인
            </button>
            {validationMessage && 
            <div
                className={`validation-message 
                    ${validationMessage.includes("일치합니다") 
                        ? "green" : "red"
                    }`}
            >
                <p>{validationMessage}</p>
                <p>날씨 : {weather}</p>
                </div>}
            
        </div>
    );
};

export default InputWeather;
