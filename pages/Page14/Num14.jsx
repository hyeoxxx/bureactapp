import React from "react";
import icon from "../../images/icon1.png";
import TitleComponent from "../Page9/TitleComponent";
import PicList from "./PicList";
import './Num14.css';

const Num14 = (props) => {

    return (
        <div className="num14-container">
            <ul className="num14-list">
                <li className="num14-item">
                    <TitleComponent
                        icon={icon}
                        iconContent="뇌 건강에 좋은 과일/채소 기억하기"
                        titleContent={`앞서 기억해 둔 뇌 건강에 좋은 과일과 채소들을 찾아 빨간색 과일/채소에는 ○, \n주황색 과일/채소에는 △, 녹색 과일/채소에는 □, 보라색 과일/채소에는 ☆ 버튼을 누르시오.`}
                    />
                    <PicList />
                </li>

                <li></li>
            </ul>
        </div>
    )
}

export default Num14;