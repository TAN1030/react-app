import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from '../components/UserList';
 
const Users = () => { 

    //useState를 사용해 데이터 저장/출력
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => { 
                console.log(response); 
                setUsers(response.data); });  
    }, []);
    // 자식 컴포넌트인 UserList에 users데이터를 props형태로 전달
    return (
        < >
        <h1>Users</h1>
        <UserList users={users}/>
        </>
    );
};
export default Users;
