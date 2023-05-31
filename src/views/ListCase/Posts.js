import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom'
import PostList from '../components/PostList';
 
const Posts = () => { 

    const [searchParams, setSearchParams] = useSearchParams();
    const offset = searchParams.get('offset') === null? 0 : searchParams.get('offset');
    const limit  = searchParams.get('limit') === null? 10 : searchParams.get('limit');

    // BACK
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_start=${offset}`)
            .then(response => { 
                console.log(response); 
                setPosts(response.data); });  
    }, []);
    // 자식 컴포넌트인 UserList에 users데이터를 props형태로 전달
    return (
        < >
        <h1>Users</h1>
        <PostList posts={posts}/>
        </>
    );
};
export default Posts;
