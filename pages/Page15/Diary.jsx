import React, { useState } from 'react';
import './Diary.css';

const Diary = () => {
  const [formData, setFormData] = useState({
    visitPlace: '',
    metPeople: '',
    purchasedItem: '',
    spentAmount: '',
    news: '',
    morningTasks: '',
    forenoonTasks: '',
    afternoonTasks: '',
    eveningTasks: '',
    tomorrowPlan: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('일정이 저장되었습니다!');
    console.log('Saved Data:', formData);
  };

  return (
    <div className="diary-container">
      <h2 className="diary-header">일기</h2>

      {/* 상단 날짜 및 날씨 */}
      <div className="date-weather">
        <div>2024년 12월 3일 (화)</div>
        <div>☀️ 맑음</div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* 상단 주요 정보 */}
        <div className="grid-table">
          <div className="grid-item">
            <label htmlFor="visitPlace">방문한 장소</label>
            <input
              id="visitPlace"
              type="text"
              name="visitPlace"
              value={formData.visitPlace}
              onChange={handleChange}
            />
          </div>
          <div className="grid-item">
            <label htmlFor="metPeople">오늘 만난 사람</label>
            <input
              id="metPeople"
              type="text"
              name="metPeople"
              value={formData.metPeople}
              onChange={handleChange}
            />
          </div>
          <div className="grid-item">
            <label htmlFor="purchasedItem">구입한 물건</label>
            <input
              id="purchasedItem"
              type="text"
              name="purchasedItem"
              value={formData.purchasedItem}
              onChange={handleChange}
            />
          </div>
          <div className="grid-item">
            <label htmlFor="spentAmount">지출 금액</label>
            <input
              id="spentAmount"
              type="text"
              name="spentAmount"
              value={formData.spentAmount}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* 시간별 주요 활동 */}
        <div className="time-table">
          <div className="time-table-header">
            <div>시각</div>
            <div>고정된 활동</div>
            <div>중요한 일</div>
          </div>
          <div className="time-table-row">
            <div>오전 5시 - 8시</div>
            <div>일어나서 한 일</div>
            <textarea
              name="morningTasks"
              value={formData.morningTasks}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="time-table-row">
            <div>오전 8시 - 12시</div>
            <div>아침식사 후에 한 일</div>
            <textarea
              name="forenoonTasks"
              value={formData.forenoonTasks}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="time-table-row">
            <div>오후 12시 - 5시</div>
            <div>오후에 한 일</div>
            <textarea
              name="afternoonTasks"
              value={formData.afternoonTasks}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="time-table-row">
            <div>오후 5시 - 10시</div>
            <div>저녁식사 후에 한 일</div>
            <textarea
              name="eveningTasks"
              value={formData.eveningTasks}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        {/* 내일 계획 */}
        <div className="grid-item">
          <label htmlFor="tomorrowPlan">내일 계획</label>
          <textarea
            id="tomorrowPlan"
            name="tomorrowPlan"
            value={formData.tomorrowPlan}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="save-button">
          저장
        </button>
      </form>

      <div className="footer-text">
        <span>🧠 뇌 건강을 위한 생활습관</span>
        <br />
        과거 흡연을 했더라도 담배를 끊고 6년 이상 지나면 인지장애 확률이 2/5로 감소합니다.
      </div>
    </div>
  );
};

export default Diary;
