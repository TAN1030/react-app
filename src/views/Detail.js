import React from 'react';
import { useSearchParams, useLocation } from "react-router-dom";

const Detail = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation(); 

    searchParams.set('sort','ASC');   // URL 은 변경되지 않는다 
    //setSearchParams(searchParams);  // 이런식으로 써도
    searchParams.append('sort', 'sortable');
 
    const id = searchParams.get('id');
    const mode = searchParams.get('mode');
    const sort = searchParams.getAll('sort');  
    
    console.log("id:", id, "/ mode : ", mode, "/ sort : ", sort );  // id: 10 / mode :  U / sort :  (2) ['ASC', 'sortable']
    
    return (
        <> 
        pathname : 현재 주소 경로 → {location.pathname} <br/>
        key : {location.key}         <br/>
        search : ?를 포함한 쿼리스트링 → {location.search} <br/><br/>
         
        <input type="text" value={id} />
        <input type="text" value={mode} /><br/>
        
        <span>sort : {sort} / sort[n] : {sort[0]}, {sort[1]}, {sort[2]}</span><br></br>
        
        <ul>
            <li>searchParams : 데이터의 값</li>
            <li>setSearchParams : 데이터를 변경시킬 수 있는 함수</li> 
        </ul>
         
        <button onClick={() => setSearchParams ({userId :"USER01", mode:"V"})}> setSearchParams TEST </button>

        </>
    )
}
export default Detail;