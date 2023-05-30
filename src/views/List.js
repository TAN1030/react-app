import React from 'react'
import { useLocation, useSearchParams } from 'react-router-dom';

const List = () => {
    const [searchParams, setSearchParams] = useSearchParams();


    return (
        <h4>List</h4>
    )

}
export default List;
