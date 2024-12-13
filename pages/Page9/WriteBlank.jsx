import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import './WriteBlank.css';

const WriteBlank = () => {
    const navigate = useNavigate();
    const wordsRef = useRef([]);
    const [validationMessage, setValidationMessage] = useState("");

    const handleValidation = () => {
        const isAllInput = wordsRef.current.every(
            (textarea) => textarea && textarea.value.trim() !== ""
        );

        if (isAllInput) {
            setValidationMessage("모든 입력이 완료되었습니다.");
            navigate('/pages/page10');
        } else {
            setValidationMessage("모든 칸에 내용을 입력해주세요.");
        }
    };

    return (
        <div className="write-blank-container">
            <div className="word-container">
                <table className="word-table">
                    <tbody>
                        <tr className="word-tr">
                            <td className="word-td">당근</td>
                            <td className="word-td">상추</td>
                            <td className="word-td">블루베리</td>
                            <td className="word-td">포도</td>
                            <td className="word-td">토마토</td>
                        </tr>
                        <tr className="word-tr">
                            <td className="word-td">사과</td>
                            <td className="word-td">감</td>
                            <td className="word-td">브로콜리</td>
                            <td className="word-td">가지</td>
                            <td className="word-td">키위</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="write-container">
                <table className="write-table">
                    <tbody>
                        {[0, 1].map((row) => (
                            <tr className="write-tr" key={row}>
                                {[0, 1, 2, 3, 4].map((col) => (
                                    <td className="write-td" key={col}>
                                        <textarea
                                            className="write-textarea"
                                            ref={(e) =>
                                                (wordsRef.current[row * 5 + col] = e)
                                            }
                                        ></textarea>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <button className="validate-button" onClick={handleValidation}>
                확인
            </button>
            <p className="blank-validation-message">{validationMessage}</p>
        </div>
    );
};

export default WriteBlank;
