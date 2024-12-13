import React, { useState } from "react";

const InputTable = () => {
  const [message, setMessage] = useState("");
  const [fruitInputs, setFruitInputs] = useState(["", "", "", "", ""]);
  const [vegInputs, setVegInputs] = useState(["", "", "", "", ""]); 

  const correctFruits = ["사과", "블루베리", "키위", "감", "포도"]; 
  const correctVegetables = ["토마토", "브로콜리", "가지", "상추", "당근"]; 

  const checkAnswers = () => {
    const fruitCorrect = fruitInputs.every((input) =>
      correctFruits.includes(input.trim())
    );

    const vegetableCorrect = vegInputs.every((input) =>
      correctVegetables.includes(input.trim())
    );

    if (fruitCorrect && vegetableCorrect) {
      setMessage("정답입니다! 🎉");
    } else if (!fruitCorrect && !vegetableCorrect) {
      setMessage("과일 종류가 틀렸습니다. 채소 종류가 틀렸습니다.");
    } else if (!fruitCorrect) {
      setMessage("과일 종류가 틀렸습니다.");
    } else {
      setMessage("채소 종류가 틀렸습니다.");
    }
  };

  return (
    <div>
      <table className="input-table2">
        <tbody>
          <tr>
            <td colSpan="5">과일</td>
          </tr>
          <tr>
            {[...Array(5)].map((_, colIndex) => (
              <td key={colIndex}>
                <input
                  type="text"
                  value={fruitInputs[colIndex]}
                  onChange={(e) => {
                    const newInputs = [...fruitInputs];
                    newInputs[colIndex] = e.target.value;
                    setFruitInputs(newInputs);
                  }}
                  onFocus={(e) => (e.target.placeholder = "")}
                  onBlur={(e) =>
                    (e.target.placeholder = `입력 ${colIndex + 1}`)
                  }
                  placeholder={`단어 ${colIndex + 1}`}
                />
              </td>
            ))}
          </tr>
          <tr>
            <td colSpan="5" style={{ backgroundColor: "#d2f7db" }}>
              채소
            </td>
          </tr>
          <tr>
            {[...Array(5)].map((_, colIndex) => (
              <td key={colIndex}>
                <input
                  type="text"
                  value={vegInputs[colIndex]}
                  onChange={(e) => {
                    const newInputs = [...vegInputs];
                    newInputs[colIndex] = e.target.value;
                    setVegInputs(newInputs);
                  }}
                  onFocus={(e) => (e.target.placeholder = "")}
                  onBlur={(e) =>
                    (e.target.placeholder = `입력 ${colIndex + 1}`)
                  }
                  placeholder={`단어 ${colIndex + 1}`}
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <div className="feedback-wrapper">
        <p className="feedback">{message}</p>
      </div>
      <div className="button-wrapper2">
        <button className="q3-button" onClick={checkAnswers}>
          정답 확인
        </button>
      </div>
    </div>
  );
};

export default InputTable;
