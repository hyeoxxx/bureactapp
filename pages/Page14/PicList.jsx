import React, { useState, useRef } from "react";
import PictureComponent from "./PictureComponent";
import Apple from "../../images/apple.png";
import BellPepper from "../../images/bell_pepper.png";
import Broccoli from "../../images/broccoli.png";
import Carrot from "../../images/carrot.png";
import Eggplant from "../../images/eggplant.png";
import Grape from "../../images/grape.png";
import Kiwi from "../../images/kiwi.png";
import Lettuce from "../../images/lettuce.png";
import Orange from "../../images/orange.png";
import PurpleGrape from "../../images/purple_grape.png";
import PurpleGrape2 from "../../images/purple_grape2.png";
import PurpleOnion from "../../images/purple_onion.png";
import RedCili from "../../images/red_chili.png";
import Tomato from "../../images/red_tomato.png";
import { useNavigate } from "react-router-dom";


const PicList = () => {

    const componentsRef = useRef([]);
    const navigate = useNavigate();

    const handleCheckAnswers = () => {
        const results = componentsRef.current.map(ref => ref?.isCorrect() || false);

        if (results.every(result => result)) {
            alert("모두 정답입니다!");
            navigate('/pages/page15');
        } else {
            alert("오답이 있습니다. 다시 확인해주세요.");
        }
    };

    return (
        <div className="pic-list-container">
            <div className="pic-components">
                <PictureComponent
                    ref={el => componentsRef.current[0] = el}
                    pic={Apple}
                    className="red"
                />
                <PictureComponent
                    ref={el => componentsRef.current[1] = el}
                    pic={BellPepper}
                    className="orange"
                />
                <PictureComponent
                    ref={el => componentsRef.current[2] = el}
                    pic={PurpleGrape}
                    className="purple"
                />
            </div>
            <div className="pic-components">
                <PictureComponent
                    ref={el => componentsRef.current[3] = el}
                    pic={Broccoli}
                    className="green"
                />
                <PictureComponent
                    ref={el => componentsRef.current[4] = el}
                    pic={RedCili}
                    className="red"
                />
                <PictureComponent
                    ref={el => componentsRef.current[5] = el}
                    pic={Orange}
                    className="orange"
                />
            </div>
            <div className="pic-components">
                <PictureComponent
                    ref={el => componentsRef.current[6] = el}
                    pic={Kiwi}
                    className="green"
                />
                <PictureComponent
                    ref={el => componentsRef.current[7] = el}
                    pic={Tomato}
                    className="red"
                />
                <PictureComponent
                    ref={el => componentsRef.current[8] = el}
                    pic={PurpleGrape2}
                    className="purple"
                />
            </div>
            <div className="pic-components">
                <PictureComponent
                    ref={el => componentsRef.current[9] = el}
                    pic={PurpleGrape}
                    className="purple"
                />
                <PictureComponent
                    ref={el => componentsRef.current[10] = el}
                    pic={Carrot}
                    className="orange"
                />
                <PictureComponent
                    ref={el => componentsRef.current[11] = el}
                    pic={Eggplant}
                    className="purple"
                />
            </div>
            <div className="pic-components">
                <PictureComponent
                    ref={el => componentsRef.current[12] = el}
                    pic={Grape}
                    className="purple"
                />
                <PictureComponent
                    ref={el => componentsRef.current[13] = el}
                    pic={Lettuce}
                    className="green"
                />
                <PictureComponent
                    ref={el => componentsRef.current[14] = el}
                    pic={PurpleOnion}
                    className="purple"
                />
            </div>

            <button type="button" className="validate-btn" onClick={handleCheckAnswers}>
                확인
            </button>
        </div>
    );
};

export default PicList;
