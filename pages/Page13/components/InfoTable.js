import React, { useState } from "react";
import TableRow from "./TableRow";

const InfoTable = () => {
  const [answers, setAnswers] = useState({
    red: "",
    orange: "",
    green: "",
    purple: "",
  });

  const [placeholdersVisible, setPlaceholdersVisible] = useState({
    red: true,
    orange: true,
    green: true,
    purple: true,
  });

  const [feedback, setFeedback] = useState("");

  const correctAnswers = {
    red: ["사과", "토마토"],
    orange: ["당근", "감"],
    green: ["상추", "브로콜리", "키위"],
    purple: ["가지", "블루베리", "포도"],
  };

  const handleInputChange = (color, value) => {
    setAnswers((prev) => ({ ...prev, [color]: value }));
  };

  const handleCheckAnswers = () => {
    const feedbackMessages = [];
    let isAnyIncorrect = false;

    for (const color in correctAnswers) {
      const userAnswers = answers[color]
        .split(",")
        .map((answer) => answer.trim());
      const isCorrect = correctAnswers[color].every((correctAnswer) =>
        userAnswers.includes(correctAnswer)
      );

      if (!isCorrect) {
        isAnyIncorrect = true;
        feedbackMessages.push(getColorName(color)); 
      }
    }

    setFeedback(isAnyIncorrect ? `틀린 부분: ${feedbackMessages.join(", ")}` : "모든 정답이 맞습니다!");
  };

  const handleFocus = (color) => {
    setPlaceholdersVisible((prev) => ({ ...prev, [color]: false }));
  };

  const handleBlur = (color) => {
    setPlaceholdersVisible((prev) => ({ ...prev, [color]: true }));
  };

  const getColorName = (color) => {
    const colorNames = {
      red: "빨간색",
      orange: "주황색",
      green: "초록색",
      purple: "보라색",
    };
    return colorNames[color] || color; 
  };

  return (
    <div>
      <table className="info-table">
        <thead>
          <tr>
            <th>색깔</th>
            <th>설명</th>
            <th>과일 · 채소</th>
          </tr>
        </thead>
        <tbody>
          <TableRow
            colorClass="red"
            colorName={getColorName("red")} 
            description={
              <>
                - 붉은 색소 성분인 라이코펜 등 함유<br />- 산화성 스트레스를 줄여
                신경세포의 퇴행을 억제하여 기억력 감퇴를 완화시킴.
              </>
            }
            inputField={
              <input
                type="text"
                placeholder={placeholdersVisible.red ? "정답 입력 (쉼표로 구분)" : ""}
                value={answers.red}
                onChange={(e) => handleInputChange("red", e.target.value)}
                onFocus={() => handleFocus("red")}
                onBlur={() => handleBlur("red")}
              />
            }
          />
          <TableRow
            colorClass="orange"
            colorName={getColorName("orange")} 
            description={
              <>
                - 유해산소를 억제하는 베타카로틴, 비타민C등 함유<br />- 신경세포를
                보호하여 치매 발생을 억제<br />- 노화와 관련된 망막의 황반변성 위험을
                낮춤.
              </>
            }
            inputField={
              <input
                type="text"
                placeholder={placeholdersVisible.orange ? "정답 입력 (쉼표로 구분)" : ""}
                value={answers.orange}
                onChange={(e) => handleInputChange("orange", e.target.value)}
                onFocus={() => handleFocus("orange")}
                onBlur={() => handleBlur("orange")}
              />
            }
          />
          <TableRow
            colorClass="green"
            colorName={getColorName("green")} 
            description={
              <>
                - 항산화 효과가 큰 루테인, 엽산 등 함유<br />- 항암효과, 콜레스테롤 감소,
                혈압 조절, 시력 보호
              </>
            }
            inputField={
              <input
                type="text"
                placeholder={placeholdersVisible.green ? "정답 입력 (쉼표로 구분)" : ""}
                value={answers.green}
                onChange={(e) => handleInputChange("green", e.target.value)}
                onFocus={() => handleFocus("green")}
                onBlur={() => handleBlur("green")}
              />
            }
          />
          <TableRow
            colorClass="purple"
            colorName={getColorName("purple")}
            description={
              <>
                - 항산화 작용이 있는 레스베라트롤 등 함유<br />- 암세포 성장억제, 면역력
                증강효과를 나타내며 신경세포를 보호하여 치매예방 효과
              </>
            }
            inputField={
              <input
                type="text"
                placeholder={placeholdersVisible.purple ? "정답 입력 (쉼표로 구분)" : ""}
                value={answers.purple}
                onChange={(e) => handleInputChange("purple", e.target.value)}
                onFocus={() => handleFocus("purple")}
                onBlur={() => handleBlur("purple")}
              />
            }
          />
        </tbody>
      </table>

      <div className="feedback-wrapper">
        <p className="feedback">{feedback}</p>
      </div>

      <div className="button-wrapper">
        <button className="q2-button" onClick={handleCheckAnswers}>
          정답 확인
        </button>
      </div>
    </div>
  );
};

export default InfoTable;
