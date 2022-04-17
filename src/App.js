import { useState } from 'react';
import './App.css';
import Form from './components/form'
import NameList from'./components/nameList'

function App() {

    const [userList, setUserList] = useState([]);
    const dataUpdate = (user) => {
        userList.push(user);
        console.log(userList);
        setUserList([...userList]);
    }

    return (
        <div>
            <h1>Hello</h1>
            <Form 
            dataUpdate={dataUpdate}
            />
            <NameList
            userList={userList}/>
        </div>
    );
}

export default App;