import React from 'react';

const PostList = ({ posts }) => {
    return (
        <>
        <div>
        {posts.map(post => {
            return (<div key={post.id}> 1 </div>)
        })}
        </div>
        </>
    );
};

export default PostList;
