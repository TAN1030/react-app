import React from 'react';
import { Link } from 'react-router-dom'; /* 이렇게 매번 임포트해줘야하나.. */

function Header(props) {
    return (
		<>
            <Link to="/">
			<h2>🌼TEST PAGE🌼</h2>
            </Link>
		</>
    );
}

export default Header;