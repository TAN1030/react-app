import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom'
import PostList from '../components/PostList'
import Pager from '../components/Pager'
import Paging from '../components/Paging'


const Posts = () => { 

    const [searchParams, setSearchParams] = useSearchParams();
    const offset = searchParams.get('offset') === null? 0 : searchParams.get('offset');
    const limit  = searchParams.get('limit') === null? 7 : searchParams.get('limit');

    // BACK
    const [posts, setPosts] = useState([]);

    useEffect(() => {
//        axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_start=${offset}`)
          axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => { 
                console.log(response); 
                setPosts(response.data); });  
    }, []);

    return (
        < >
        <h5>~ post list ~</h5>
        <PostList itemsPerPage={10} posts={posts}/>
        <Pager> </Pager>
        </>
    );
};
export default Posts;
