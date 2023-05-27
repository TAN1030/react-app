import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Product = () => {
    //const { productId } = useParams(); 이렇게도 쓸 수 있음
    const productId = useParams().productId;
    const location = useLocation();
   

    return (
        <>
            <h3>{productId}번 상품</h3>  

                hash :  주소의 #문자열 뒤의 값 → {location.hash} <br/>
                pathname : 현재 주소 경로 → {location.pathname} <br/>
                search : ?를 포함한 쿼리스트링 → {location.search} <br/>
                state : 페이지로 이동시 임의로 넣을 수 있는 상태 값 → {location.state} <br/>
                key : location 객체의 고유 값 (초기값 default), 페이지가 변경될 때 마다 고유의 값이 생성 → {location.key}                
           
        </>
    );
}

export default Product;