import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './views/Header';
import Main from './views/Main';
import Footer from './views/Footer';
import Product from './views/Product';
import Detail from './views/Detail';
import NotFound from './views/NotFound';

import PostList from './views/ListCase/Post';
import UserList from './views/ListCase/Users';

import SelectBoxTest from './views/SelectBoxTest';

//import JsonReadWrite from './views/JsonReadWrite';


const App = () => {
	return (
		<div className='App'>
      <BrowserRouter>      
        <Header />
        <Routes>
        <Route path="/" element={<Main />}></Route>
          <Route path="/product/:productId" element={<Product />}></Route> 
          <Route path="/postList" element={<PostList />}></Route>  
          <Route path="/users" element={<UserList />}></Route>  
          <Route path="/selectBoxTest" element={<SelectBoxTest />}></Route>  
          <Route path="/detail" element={<Detail />}></Route>  

          { /* 상단에 위치하는 Route 들을 확인하고 일치하는 Route 가 없다면, 아래와같이 처리 */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
	);
}

export default App;