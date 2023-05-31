import React from 'react';
import { useNavigate, Link, redirect } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    const loader = async () => {
       // const user = await getUser();
       // if (!user) {
          return redirect("/");
       // }
       // return null;
      }; 
    return (
        <>
        <h5>💝</h5>
        <div>
            <button onClick={() => { navigate('/');  }}>HOME으로 가기</button> 
            <span onClick={() => navigate(-1)}>🔙뒤로가기</span> <br/> 
            <Link to="https://reactrouter.com/" target='_blank'>👑외부링크는 <code>Link</code> 태그로 처리</Link>
            
        </div>    
        </>
    )
}
export default Footer;


