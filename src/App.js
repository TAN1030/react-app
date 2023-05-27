import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './page/Header';
import Main from './page/Main';
import Product from './page/Product';
import NotFound from './page/NotFound';

const App = () => {
	return (
		<div className='App'>
      <BrowserRouter>      
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/product/*" elemnet={<Product />}></Route>
          { /* 상단에 위치하는 Route 들을 확인하고 일치하는 Route 가 없다면, 아래와같이 처리 */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
	);
}

export default App;