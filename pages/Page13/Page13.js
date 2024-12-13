import React from "react";

import flowerImg from "./img/flower.png"
import scheduleImg from "./img/schedule.png";

import QuizSection from "./components/QuizSection";
import InfoTable from "./components/InfoTable";
import InputTable from "./components/InputTable";

const Page13 = () => {
  const correctAnswers = [
    "토마토", "사과", "감", "브로콜리", "가지",
    "당근", "상추", "블루베리", "포도", "키위",
  ];

  return (
    <div className="container">
      <p className="text-with-image">
        <img src={flowerImg} alt="아이콘" />
        <span className="text-background">뇌 건강에 좋은 과일 · 기억하기</span>
      </p>
      <QuizSection correctAnswers={correctAnswers} />
      <p className="text-with-image2">
        <img src={flowerImg} alt="아이콘" />
        <span >앞서 기억해 둔 <strong>뇌 건강에 좋은 과일과 채소 10가지를</strong> 제시된 기준에 맞게 분류하여 적어보세요.</span>
      </p>
      <InfoTable />
      <InputTable />
      <div className="note">
        <p>
          <strong>뇌 건강에 좋은 과일 · 채소를 기억해 주세요.</strong>
        </p>
      </div>
    </div>
  );
}

export default Page13;