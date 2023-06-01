import React, {useState} from 'react';
import ReactPaginate from 'react-paginate';  // https://www.npmjs.com/package/react-paginate
import "./Paging.css"

const PostList = ({itemsPerPage, posts }) => {

    itemsPerPage = itemsPerPage === undefined ? 7 : itemsPerPage;
    const items = posts;

    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset); // 현재 페이징 그룹
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
          `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
      };
    return (
        <>
        <div>
        {currentItems && currentItems.map(post => {
            return (<div key={post.id}>[{post.id}] {post.title} </div>)
        })}
        </div>
    
    <div>
      <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="< previous"
      renderOnZeroPageCount={null}/>
    
    </div>
    <br/>
<hr/>
<br/>
    </>
    );
};

export default PostList;
