import React from 'react';
import { useNavigate, Link } from 'react-router-dom';


const Footer = () => {
    const navigate = useNavigate();

    return (
        <>
        <h5>이곳은 페이지의 하단이다. (useNavigate TEST)</h5>
        <div>
            <button onClick={() => {
                navigate('/');
            }}>HOME으로 가기</button>

            <span onClick={() => navigate(-1)}>🔙뒤로가기</span> <br/>

            <span onClick={() => navigate("https://reactrouter.com/")}>외부링크는 naviaget로 불가</span> <br/>
            <Link to="https://reactrouter.com/" target='_blank'>👑외부링크는 <code>Link</code> 태그로 처리</Link>
            
        </div>    
        </>
    )
}
export default Footer;


