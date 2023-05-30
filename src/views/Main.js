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

			<h4><Link to="/detail?id=10&mode=U&sort=DESC">2. searchParams TEST</Link></h4>
			
			<h4><Link to="/list">3. List TEST</Link></h4>
			<ul>
				<Link to="/selectBoxTest"><li>Select-Box TEST</li></Link>
                <Link to="/list?limit=5"><li>List TEST</li></Link>
                      
            </ul>



		</>
	);
 
};
export default Main;