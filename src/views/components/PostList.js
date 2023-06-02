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
    
    <div class="pager" style={{
                display: 'flex'
      }}>
      <ReactPaginate
      pageCount={pageCount}  // 필수. 총페이지수 
      previousLabel=" ◀ " // 버튼레이블 - previous 
      breakLabel="..."  // 줄임표 레이블
      nextLabel=" ▶ "   // 버튼레이블 - next 

      pageRangeDisplayed={3}     // 표시되는 페이지 범위
      marginPagesDisplayed = {3} // 여백에 표시되는 범위
      breakClassName="This_is__li:breakLabel__name" // li줄임표 요소의 태그에 있는 클래스 이름
      breakLinkClassName="This_is__a:breakLabel__name" //a줄임표 요소의 태그에 있는 클래스 이름
      className="This_is__className"
      pageClassName="This_is__li___name"
      pageLinkClassName="This_is__a:li__name"

      activeClassName="THIS_IS_NOW_PAGE"  // 활성 페이지의 클래스 이름
      activeLinkClassName="THIS_IS_NOW_PAGE_A" // 활성 페이지의 a태그 이름
      renderOnZeroPageCount={null} // 0일 때 호출되는 렌더링 함수
      onPageChange={handlePageClick}  // 페이지가 변경될때 호출하는 메서드.  현재 페이지 개체를 인수로 노출
/>  
    </div>
    <br/>
<hr/>
<br/>
    </>
    );
};

export default PostList;
