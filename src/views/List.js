import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
 
const List = () => { 
    const [searchParams, setSearchParams] = useSearchParams();
    const offset = searchParams.get('offset') === null? 0 : searchParams.get('offset');
    const limit  = searchParams.get('limit') === null? 5 : searchParams.get('limit');

    // BACK 
    useEffect(() => { 
        fetch(  `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_start=${offset}`)
         .then((response) => response.json())
         .then((result) => setPosts(result)) 
         ;
    }, [offset, limit]); 
   
    //셀렉트 박스  
    const limitSelectList = ["5", "10", "15", "20"];

    const [posts, setPosts] = useState([]);
    const [Selected, setSelected] = useState("10");   
    const handledSelect = (e) => { 
        setSelected(e.target.value); //select:onChange의 선택된 option의 value 값을 e.target.value 로 받은 후 setSelected 
    } 
   
    // 페이징
    const movePage = (pageNumber) => { 
        searchParams.set('offset', (pageNumber -1) *10);
        setSearchParams(searchParams); 
    };
    
    return (
        <section>
            <h4><Link to="https://jsonplaceholder.typicode.com/" target='_blank'>🐠POST LIST (JsonPlaceHolder)🐠</Link> </h4>  
                   
            <select onChange={handledSelect} value={Selected}>
                {limitSelectList.map((item) => (
                    <option value={item} key={item}>
                        {item}
                    </option>
                ))}개 씩 보기
            </select> Selected: <b>{Selected} </b>   

            <hr/>

            {posts.map(({id, title}) => (
                <article key={id}>
                    <p>
                        <div>id:{id} / title:{title}</div>
                    </p>
                </article>
            ))}    
            <div>
                <button onClick={() => movePage(1)}>1</button>
                <button onClick={() => movePage(2)}>2</button>
                <button onClick={() => movePage(3)}>3</button>
            </div>
        </section>
    );
};
export default List;
