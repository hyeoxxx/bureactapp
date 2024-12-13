import React from "react";
import Clock from "./Clock";
import InputWeather from "./InputWeather";
import WriteBlank from "./WriteBlank";
import TitleComponent from "./TitleComponent";
import icon from "../../images/icon1.png";
import './Num9.css';

const Num9 = () => {
    return (
        <div className="num9-container">
            <ul className="num9-list">

                <li className="num9-item">
                    <TitleComponent
                        icon={icon}
                        titleContent={`오늘의 날짜를 적고, 날씨를 클릭하세요`}
                    />
                    <InputWeather />
                </li>

                <li className="num9-item">
                    <TitleComponent
                        icon={icon}
                        titleContent={`현재 시간을 적고,\n시침 혹은 분침을 선택하여 오른쪽 시계를 완성시키세요`}
                    />
                    <Clock />
                </li>

                <li className="num9-item">
                    <TitleComponent
                        icon={icon}
                        titleContent={`다음은 뇌 건강에 좋은 과일과 채소 10가지입니다.\n소리 내어 읽고, 아래 빈칸에 따라 적어보세요`}
                    />
                    <WriteBlank />
                </li>
            </ul>
        </div>
    );
};

export default Num9;
