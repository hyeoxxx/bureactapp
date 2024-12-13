import React from "react";
import UnderTable from "./components/UnderTable";
import Ontable from "./components/OnTable"
import flowerImg from "./img/flower.png";
import scheduleImg from "./img/schedule.png";
import './Page10.css';

const Page10 = () => {
  return (

    <div className="container">
      <p className="text-with-image">
        <img src={flowerImg} alt="아이콘" />
        <span className="text-background">뇌 건강에 좋은 과일 · 기억하기</span>
      </p>
      <p className="text-with-image3">
        <span>앞서 기억해 둔 <strong>뇌 건강에 좋은 과일과 채소 10가지를</strong> 색깔별로 나누어 적고, 설명을 소리내어 읽어보세요.</span>
      </p>
      <Ontable />
      <p className="text-with-image4">
        <img src={flowerImg} alt="아이콘" />
        <span>앞서 기억해 둔 <strong>뇌 건강에 좋은 과일과 채소 10가지를</strong> 종류별로 나누어 적어보세요.</span>
      </p>
      <UnderTable />
      <div className="note-memo">
        <p>
          <img src={scheduleImg} alt="아이콘" />
          <strong>뇌 건강에 좋은 과일 · 채소를</strong> 기억해 주세요.
        </p>
      </div>
    </div>
  );
}
export default Page10;