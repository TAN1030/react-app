import React from 'react';
import { Link } from 'react-router-dom'; /* 이렇게 매번 임포트해줘야하나.. */

function Header(props) {
    return (
		<>
            <Link to="/">
			<h1>헤더영역</h1>
            </Link>
		</>
    );
}

export default Header;