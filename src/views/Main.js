import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
	return (
		<>
			<h3>~메인페이지~</h3> 
			<table width="100%">
				<tr>
					<td>
						<h4>1. Path Variable TEST</h4>
						<ul>
							<Link to="/product/1"><li>1번 상품</li></Link>
							<Link to="/product/2"><li>2번 상품</li></Link>
							<Link to="/product/3?search=productName(3번item)&q=demo#test"><li>3번 상품</li></Link>
						</ul>
					</td>
					<td><h4><Link to="/detail?id=10&mode=U&sort=DESC">2. searchParams TEST</Link></h4></td>
					<td><h4><Link to="/list">3. List TEST</Link></h4>
						<ul>
							<Link to="/selectBoxTest"><li>Select-Box TEST</li></Link>
							<Link to="/postOld"><li>Post List</li></Link>
							<Link to="/users"><li>User List(axios, Custom components)</li></Link>
							<Link to="/posts"><li>Post List</li></Link>
						</ul></td>
				</tr>
				<tr>
					<td>
						<h4>4. inflearn samp</h4>
						<ul>
							<Link to="/samp01"><li>구구단/</li></Link> 
						</ul>
					</td>
					<td></td>
					<td></td>					
				</tr>
			</table>
		</>
	);

};
export default Main;