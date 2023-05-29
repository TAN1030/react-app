import React from 'react';
import { useSearchParams, useLocation } from "react-router-dom";

const Detail = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation(); 

    const id = searchParams.get('id');
    const mode = searchParams.get('mode');

    console.log("id:", id, "/ mode : ", mode);
    return (
        <>
        <h1> EDIT </h1>
        pathname : 현재 주소 경로 → {location.pathname} <br/>
        key : {location.key}         <br/>
        search : ?를 포함한 쿼리스트링 → {location.search} <br/><br/>
         
        <input type="text" value={id} />
        <input type="text" value={mode} />
        <br></br>
        <ul>
            <li>searchParams : 데이터의 값</li>
            <li>setSearchParams : 데이터를 변경시킬 수 있는 함수</li> 
        </ul>
         
        <button onClick={() => setSearchParams ({userId :"USER01", mode:"V"})}> setSearchParams TEST </button>

        </>
    )
}
export default Detail;