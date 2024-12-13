import "./Page11.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cube from "./Cube";
import icon1 from "./img/flower.png"
function Page11() {
    const hint = [
        [
            [0, 0, 0],
            [0, 2, 0],
            [1, 1, 1],
        ],
    ]
    const list = [
        [

            [
                [0, 0, 0],
                [0, 2, 0],
                [0, 1, 1],
            ],
            [
                [0, 0, 0],
                [0, 0, 0],
                [1, 1, 1],
            ],
        ],

        [

            [
                [0, 0, 0],
                [0, 1, 0],
                [0, 1, 2],
            ],
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 1, 0],
            ],
        ],

        [

            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 2, 1],
            ],
            [
                [0, 0, 0],
                [0, 0, 0],
                [1, 1, 0],
            ],
        ]
    ]
    const navigate = useNavigate();
    const [userAnswer, setUserAnswer] = useState(list.map(item => item.map(item => item.map(item => item.map(item => 0)))));

    const onClickMethod = (e, x, y, z, layerIndex) => {
        const clicked = e.currentTarget;
        const inner = clicked.querySelectorAll("div");

        inner.forEach((div) => {
            div.style.backgroundColor = (div.style.backgroundColor === "yellow") ? "white" : "yellow";
        });

        setUserAnswer(prevAnswer => {
            const newAnswer = [...prevAnswer];
            newAnswer[layerIndex][z][y][x] = (inner[0].style.backgroundColor === "yellow") ? 1 : 0;
            return newAnswer;
        });
    }

    const onClickCheckAnswer = () => {
        let tempList = list.map(item => item.map(item => item.map(item => item.map(item => {
            if (item === 1) {
                return 0;
            } else if (item === 2) {
                return 1;
            } else {
                return 0;
            }
        }))));
        let isCorrect = true;

        for (let i = 0; i < tempList.length; i++) {
            for (let j = 0; j < tempList[i].length; j++) {
                for (let k = 0; k < tempList[i][j].length; k++) {
                    for (let l = 0; l < tempList[i][j][k].length; l++) {
                        if (tempList[i][j][k][l] !== userAnswer[i][j][k][l]) {
                            isCorrect = false;
                            break;
                        }
                    }
                }
            }
        }

        if (isCorrect) {
            alert("정답입니다.");
            navigate("/pages/page12");
        } else {
            alert("오답입니다.");
        }
    }

    return (
        <div className="puzzle-page">
            <Title title="색칠된 위치 찾기"
                content="<보기>와 같이 도형을 오른쪽으로 90도 회전 하였을 때, 왼쪽 그림에서 색칠된 위치를 찾아 오른쪽 그림에 알맞게 색칠해보세요." />
            <div className="cube-hint-container">
                <HintContainer title="<보기>" />
                <div className="cube-hint">
                    <CubeContainer hint={true} data={hint} rotate={0} />
                    =
                    <CubeContainer hint={true} data={hint} rotate={90} />
                </div>
            </div>
            <div className="cube-answer-container">
                <table className="table-cubes">
                    <tbody>
                        {list.map((item, index) => (
                            <tr className="cube-container">
                                <td className="cube-answer-hint">
                                    <CubeContainer hint={true} data={item} rotate={0} clickMethod={onClickMethod} index={index} />
                                </td>

                                <td className="cube-answer-hint">
                                    <CubeContainer hint={false} data={item} rotate={90} clickMethod={onClickMethod} index={index} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button className="button-check-answer" onClick={onClickCheckAnswer}>정답 확인</button>
        </div>
    );
}

export default Page11;

const CubeContainer = ({ data, rotate, hint, clickMethod, index }) => {
    return (
        <div className="scene" style={{ transform: `rotateX(-15deg) rotateY(-25deg) rotate(${rotate}deg)` }}>
            {data.map((layer, zIndex) =>
                layer.map((row, rowIndex) =>
                    row.map((cell, colIndex) =>
                        cell === 1 ? (
                            <Cube color="white" key={`${zIndex}-${rowIndex}-${colIndex}`} x={colIndex} y={rowIndex} z={zIndex} onClickMethod={(e) => hint ? null : clickMethod(e, colIndex, rowIndex, zIndex, index)} />
                        ) :
                            cell === 2 ? (
                                <Cube color={hint ? "yellow" : "white"} key={`${zIndex}-${rowIndex}-${colIndex}`} x={colIndex} y={rowIndex} z={zIndex} onClickMethod={(e) => hint ? null : clickMethod(e, colIndex, rowIndex, zIndex, index)} />
                            )
                                : null
                    )
                )
            )}
        </div>
    );
};

const Title = (props) => {
    return (
        <div className="title-container">

            <h2 className="title"><img src={icon1} alt="아이콘" /> {props.title}</h2>
            <p className="title-description">{props.content}</p>
        </div>
    );
}
const HintContainer = (props) => {
    return (
        <div className="hints">
            <h3>{props.title}</h3>
        </div>
    );
}