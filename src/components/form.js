import {React, useState} from 'react';

const Form = ({dataUpdate}) => {

    // const [ inputName, setInputName ] = useState("");
    // const [ inputLastName, setnputLastName ] = useState("");
    // const [ inputPhone, setinputPhone ] = useState("");
    const [ data, setData ] = useState({
        name: "", 
        lastName: "",
        phone:""
    })

    const handleChangeName = (e) => {
        setData((prevState) => {
            return{
                ...prevState,
                name: e.target.value
            }
        })
    }
    const handleChangeLastName = (e) => {
        setData((prevState) => {
            return{
                name: prevState.name,
                lastName: e.target.value,
                phone: prevState.phone
            }
        })
    }
    const handleChangePhone = (e) => {
        setData((prevState) => {
            return{
                name: prevState.name,
                lastName: prevState.lastName,
                phone:  e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dataUpdate(data);
    }

    return ( 
        <form id="form" onSubmit={handleSubmit} method="">
            <input type="text" id="" value={data.name} onChange={handleChangeName} />
            <input type="text" id="" value={data.lastName} onChange={handleChangeLastName} />
            <input type="text" id="" value={data.phone} onChange={handleChangePhone} />
            <button type="submit">Enviar</button>
        </form>
    );
}
 
export default Form;