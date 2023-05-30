import React, { useEffect, useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

const List = () => { 
    const [searchParams, setSearchParams] = useSearchParams();
    const offset = searchParams.get('offset') === null? 0 : searchParams.get('offset');
    const limit  = searchParams.get('limit') === null? 5 : searchParams.get('limit');
    const limitSelectList = ["5", "10", "15", "20"];
   
    const limitSelectOpions = [
        { value: "apple", name: "사과" },
        { value: "banana", name: "바나나" },
        { value: "orange", name: "오렌지" },
    ];
    const SelectBox = (props) => {
        return (
            <select>
                {props.options.map((option) => (
                    <option
                        value={option.value}
                        defaultValue={props.defaultValue === option.value}
                    >
                        {option.name}
                    </option>
                ))}
            </select>
        );
    };

    const [posts, setPosts] = useState([]);
    const [Selected, setSelected] = useState("10");   

    useEffect(() => { 
        fetch(  `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_start=${offset}`)
         .then((response) => response.json())
         .then((result) => setPosts(result)) 
         ;
    }, [offset, limit]);
 
    const movePage = (pageNumber) => { 
        searchParams.set('offset', (pageNumber -1) *10);
        setSearchParams(searchParams); 
    };
    const onChangeLimit = (Selected) => {
        alert(Selected);
    }
    const handledSelect = (e) => {
        //select:onChange의 선택된 option의 value 값을 e.target.value 로 받은 후 setSelected 
        setSelected(e.target.value);
    }
    return (
        <section>
            <h4><Link to="https://jsonplaceholder.typicode.com/" target='_blank'>🐠POST LIST (JsonPlaceHolder)🐠</Link> </h4>  
            셀렉트 박스 테스트 1 : 
            <select defaultValue={'5'} id="pLimit" name="pLimit" onChange={onChangeLimit}>
                <option value='5'>5</option>
                <option value='10'>10</option>
                <option value='15'>15</option>
                <option value='20'>20</option>                
            </select> /         
            셀렉트 박스 테스트 2 : 
            <select onChange={handledSelect} value={Selected}>
                {limitSelectList.map((item) => (
                    <option value={item} key={item}>
                        {item}
                    </option>
                ))}
            </select> Selected: <b>{Selected} </b>  
            /
            셀렉트 박스 테스트 3 :         
            <SelectBox options={limitSelectOpions} defaultValue="banana"></SelectBox>개씩 보기
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
