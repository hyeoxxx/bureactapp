import React, { useState, useEffect, useRef } from "react";
import "./Page12.css";
import icon1 from "./img/flower.png"
import { useNavigate } from "react-router-dom";

function Page12() {
    const Hints = [
        { number: 1, hint: "신용카드를 사용한 후 자기의 이름을 써넣는 행위", answer: "서명" },
        { number: 2, hint: "해마다 즐기거나 기념하는 날. 설날, 대보름날, 단오, 추석, 동짓날 등", answer: "명절" },
        { number: 3, hint: "한쪽 다리를 다쳐서 걸을 때 몸이 한쪽으로 기우뚱거리는 사람을 이르는 말", answer: "절름발이" },
        { number: 4, hint: "발로 밟은 자리에 남은 모양", answer: "발자국" },
        { number: 5, hint: "우리나라", answer: "대한민국" },
        { number: 6, hint: "제주도 중앙에 있는 산", answer: "한라산" },
        { number: 7, hint: "어떤 지역의 명물. 영광의 OOO은 굴비", answer: "특산물" },
        { number: 8, hint: "그림을 그리는 데 사용되며 여러 가지 색깔을 가진 도구", answer: "물감" },
        { number: 9, hint: "단속하기 위하여 주의하여 지켜보는 사람", answer: "감시자" },
        { number: 10, hint: "영화나 연극에서 전문적으로 연기를 하는 사람", answer: "연기자" },
        { number: 11, hint: "완두콩 빛깔과 같이 연한 초록색", answer: "연두색" }
    ];
    const [grid, setGrid] = useState([]);
    const [horizontalHints, setHorizontalHints] = useState([]);
    const [verticalHints, setVerticalHints] = useState([]);
    const inited = useRef(false);

    const navigate = useNavigate();
    const GRID_SIZE = 7;

    const [wordPlaceHolder, setWordPlaceHolder] = useState(Array.from({ length: GRID_SIZE }, () =>
        Array(GRID_SIZE).fill("")));

    const [userInput, setUserInput] = useState(
        Array.from({ length: GRID_SIZE }, () =>
            Array(GRID_SIZE).fill("")));


    const onChangeMethod = (rowIndex, colIndex, value) => {
        console.log("입력값:", value, "위치:", rowIndex, colIndex, "값 : ", value);
        setUserInput(prevInput => {
            const newInput = [...prevInput];
            newInput[rowIndex] = [...newInput[rowIndex]];
            newInput[rowIndex][colIndex] = value;
            return newInput;
        });
    }
    useEffect(() => {
        if (inited.current) return;
        inited.current = true;
        const initialGrid = Array.from({ length: GRID_SIZE }, () =>
            Array(GRID_SIZE).fill("")
        );

        const tempWordPlaceHolder = Array.from({ length: GRID_SIZE }, () =>
            Array(GRID_SIZE).fill("")
        );;
        const tempHorizontalHints = [];
        const tempVerticalHints = [];
        let x = 0, y = 0;
        let isHorizontal = true;

        let prevX = [], prevY = [];
        for (let i = 0; i < Hints.length; i++) {
            isHorizontal = (i % 2 === 0);

            if (x >= GRID_SIZE || y >= GRID_SIZE) continue;

            if (isHorizontal) {
                tempHorizontalHints.push(Hints[i]);
            } else {
                tempVerticalHints.push(Hints[i]);
            }
            if (i === 0) {
                Hints[i]['answer'].split('').forEach((char, index) => {
                    initialGrid[0][index] = char;
                });
                prevX[i] = 0;
                prevY[i] = 0;
                tempWordPlaceHolder[0][0] = Hints[i]['number'];
            } else {
                const currentWord = Hints[i]['answer'];

                Hints[i]['answer'].split('').forEach((char, index) => {
                    Hints[i - 1]['answer'].split('').forEach((char2, index2) => {
                        if (char === char2) {
                            console.log("[" + currentWord + "/" + Hints[i - 1]['answer'] + "]index : " + index + " index2 : " + index2);
                            let startX, startY;
                            if (isHorizontal) {
                                startY = prevY[i - 1] + index2;
                                startX = prevX[i - 1] - index;
                            } else {
                                startY = prevY[i - 1] - index;
                                startX = prevX[i - 1] + index2;
                            }

                            console.log("[" + (i % 2 === 0 ? "가로" : "세로") + "]추가 : " + currentWord + " x : " + x + " y : " + y + "(Prev x : " + prevX[i - 1] + " / y : " + prevY[i - 1]);
                            prevX[i] = startX;
                            prevY[i] = startY;

                            for (let j = 0; j < currentWord.length; j++) {
                                const writeX = isHorizontal ? (startX + j) : startX;
                                const writeY = isHorizontal ? startY : (startY + j);
                                initialGrid[writeY][writeX] = currentWord[j];
                                tempWordPlaceHolder[writeY][writeX] = j === 0 ? Hints[i]['number'] : -1;
                            }
                        }
                    });
                });
            }
        }
        setGrid(initialGrid);
        setHorizontalHints(tempHorizontalHints);
        setVerticalHints(tempVerticalHints);
        setWordPlaceHolder(tempWordPlaceHolder);
    }, []);

    const onClickCheckAnswer = () => {
        let isCorrect = true;

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] !== userInput[i][j]) {
                    isCorrect = false;
                    break;
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
        <div className="puzzle2-page">
            <div className="puzzle2-head">
                <Title title="낱말 퍼즐"
                    content="가로, 세로 설명을 읽고 알맞은 단어를 적어보세요." />
            </div>
            <div className="hint-container">
                <HintContainer title="가로" hints={horizontalHints} />
                <HintContainer title="세로" hints={verticalHints} />
            </div>
            <div className="grid-container">
                <GridContainer grid={grid} onChangeMethod={onChangeMethod} wordPlaceHolder={wordPlaceHolder} />
            </div>

            <button className="button-check-answer" onClick={onClickCheckAnswer}>정답 확인</button>
        </div>
    );
}

export default Page12;
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
        <div className="page13-hints">
            <div className="page13-hint-title">
                <h3>{props.title}</h3>
                <p>{props.title === "가로" ? "(왼쪽에서 오른쪽 방향)" : "(위에서 아래 방향)"}</p>
            </div>
            <div className="page13-hint-list">
                {props.hints.map((hint) => (
                    <p key={hint.number}>
                        {hint.number}. {hint.hint}
                    </p>
                ))}
            </div>
        </div>
    );
}
const GridContainer = (props) => {
    return (
        props.grid.map((row, rowIndex) => (
            <div className="grid-row" key={rowIndex}>
                {row.map((cell, colIndex) => (
                    <input
                        key={`${rowIndex}-${colIndex}`}
                        className="grid-cell"
                        maxLength={1}
                        placeholder={props.wordPlaceHolder[rowIndex][colIndex] === -1 ? "" : props.wordPlaceHolder[rowIndex][colIndex]}
                        disabled={cell === ""}
                        onChange={(e) => props.onChangeMethod(rowIndex, colIndex, e.target.value)}
                    />
                ))}
            </div>
        ))
    );
}