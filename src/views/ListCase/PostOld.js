import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
 
const PostOld = () => { 
    const _LIMIT = 10;   /* 초기 limit 수를 설정  */ 
    const _TOTAL = 100;  /* 전체 페이지 건 수를 받아올수없어 임의설정 */ 

    const [searchParams, setSearchParams] = useSearchParams();
    const offset = searchParams.get('offset') === null? 0 : searchParams.get('offset');
    const limit  = searchParams.get('limit') === null? _LIMIT : searchParams.get('limit');

    // BACK  
    useEffect(() => { 
        fetch(  `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_start=${offset}`)
         .then((response) => response.json())
         .then((result) => setPosts(result))  
         ;
    }, [offset, limit]);   // post 에는 offset,limt 로 잘린 건수만큼 존재 
    const [posts, setPosts] = useState([]); 
 

    //셀렉트 박스  
    const limitSelectList = ["5", "10", "15", "20"];
    const [Selected, setSelected] = useState(_LIMIT);   

    const handledSelect = (e) => { 
        setSelected(e.target.value); //select:onChange의 선택된 option의 value 값을 e.target.value 로 받은 후 setSelected 
        searchParams.set('limit', e.target.value);
        setSearchParams(searchParams);  
    } 
   
    // 페이징
    const movePage = (pageNumber) => { 
        searchParams.set('offset', (pageNumber -1) * limit);
        setSearchParams(searchParams); 
    };
    // 페이지네이션
    const printPageNavi = () => {
        let arr= [];  
        const pager = 0;
        for (let i=1; i <= _TOTAL; i++ ){
            if(i%limit==0){ 
                let idx = i/limit; 
                arr.push(  <button onClick={() => movePage(idx)}> {idx} </button> ); 
            } 
        }
        return arr;
    }
    // 검색
    

    return (
        <section>
            <h4><Link to="https://jsonplaceholder.typicode.com/" target='_blank'>🐠POST LIST (JsonPlaceHolder)🐠</Link> </h4>  
            검색 : [ input TEXT ] [ btn 조회하기 ] <br/>
            
            총 {_TOTAL} 건 중   
            <select onChange={handledSelect} value={Selected}>
                {limitSelectList.map((item) => (
                    <option value={item} key={item}>
                        {item}
                    </option>
                ))}
            </select>개 씩 보기 Selected: <b>{Selected} </b>   

            <hr/> 
            {posts.map(({id, title}) => (
                <article key={id}>
                    <p>  id:{id} / title:{title} </p>
                </article>
            ))}   
            <div>{printPageNavi()}</div>  
        </section>
    );
};
export default PostOld;
