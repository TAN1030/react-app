import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const List = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const offset = searchParams.get('offset') === null? 1 : searchParams.get('offset');
    const limit  = searchParams.get('limit') === null? 5 : searchParams.get('limit');

    const [posts, setPosts] = useState([]);
 
    useEffect(() => { 
        fetch(  `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_start=${offset}`)
         .then((response) => response.json())
         .then((result) => setPosts(result))
         .then((data) => console.log("DATA : " +data));
         ;
    }, [offset, limit]);
 
    const movePage = (pageNumber) => { 
        searchParams.set('offset', (pageNumber -1) *10);
        setSearchParams(searchParams); 
    };

    return (
        <section>
            <h4><Link to="https://jsonplaceholder.typicode.com/" target='_blank'>🐠POST LIST (JsonPlaceHolder)🐠</Link> </h4>
            
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
