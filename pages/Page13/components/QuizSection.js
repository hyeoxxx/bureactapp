import React, { useState } from "react";

const QuizSection = ({ correctAnswers }) => {
  const [userAnswers, setUserAnswers] = useState(Array(10).fill(""));
  const [result, setResult] = useState(null);

  const handleInputChange = (index, value) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[index] = value;
    setUserAnswers(updatedAnswers);
  };

  const checkAnswers = () => {
    const correctSet = new Set(correctAnswers);
    const matchedAnswers = userAnswers.filter((answer) => correctSet.has(answer));
    const uniqueMatchedAnswers = Array.from(new Set(matchedAnswers));
    const isAllCorrect = uniqueMatchedAnswers.length === correctAnswers.length;

    setResult({
      isAllCorrect,
      matchedAnswers: uniqueMatchedAnswers,
    });
  };

  return (
    <div>
      <table className="memory-table">
        <tbody>
          {[...Array(2)].map((_, rowIndex) => (
            <tr key={rowIndex}>
              {[...Array(5)].map((_, colIndex) => (
                <td key={colIndex}>
                  <input
                    type="text"
                    value={userAnswers[rowIndex * 5 + colIndex]}
                    onChange={(e) =>
                      handleInputChange(rowIndex * 5 + colIndex, e.target.value)
                    }
                    onFocus={(e) => (e.target.placeholder = "")}
                    onBlur={(e) =>
                      (e.target.placeholder = `단어 ${rowIndex * 5 + colIndex + 1}`)
                    }
                    placeholder={`단어 ${rowIndex * 5 + colIndex + 1}`}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {result && (
        <div className="quiz-result">
          {result.isAllCorrect ? (
            <p style={{ color: "green" }}>모든 정답을 맞췄습니다! 🎉</p>
          ) : (
            <div>
              <p style={{ color: "blue" }}>
                맞춘 정답: {result.matchedAnswers.join(", ") || "없음"}
              </p>
            </div>
          )}
        </div>
      )}
      <div className="button-wrapper">
      <button className="q1-button" onClick={checkAnswers}>
        정답확인
      </button>
      </div>
    </div>
  );
};

export default QuizSection;
