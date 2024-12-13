import React from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/pages/page9');
    }
    return (
        <div className="login-container">
            <h1 className="login-title">
                웹 응용프로그래밍 1조
            </h1>
            <div className="login-desc">
                <p>치매에 도움을 드리기 위한 기능성 웹 어플리케이션</p>
                <p>이우용(팀장), 김의중, 박인서, 최혁</p>
                <p>2024.12.13</p>
            </div>
            <form className="login-form">
                <div className="form-group">
                    <label htmlFor="username" className="login-label">아이디</label>
                    <input type="text" id="username" className="login-input" placeholder="아이디를 입력하세요" />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="login-label">암호</label>
                    <input type="password" id="password" className="login-input" placeholder="암호를 입력하세요" />
                </div>


                <button type="submit" className="login-button" onClick={handleLogin}>로그인</button>
            </form>
        </div>
    );
}

export default Login;