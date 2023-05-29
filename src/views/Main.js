import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
	return (
		<>
			<h3>메인페이지</h3> 
			<h4>1. Path Variable TEST</h4>
            <ul>
                <Link to="/product/1"><li>1번 상품</li></Link>
                <Link to="/product/2"><li>2번 상품</li></Link>          
				<Link to="/product/3?search=productName(3번item)&q=demo#test"><li>3번 상품</li></Link>        
            </ul>

			<h4>2. searchParams TEST</h4>
			<ul>
 				<Link to="/detail?id=10&mode=U"><li>searchParams TEST</li></Link>         
            </ul>

		</>
	);
};
export default Main;