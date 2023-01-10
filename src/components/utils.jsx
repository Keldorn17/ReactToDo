import axios from 'axios';

//const url = "http://localhost/PZ-13/2022.12.14/ReactToDO/server/"
const url = "https://mytodoenyem.000webhostapp.com/React/"

export const allTodos = async () => {
    const res = await axios.get(url+ "allTodos.php")
    return res.data
}

export const addTodo = async ({newItem}) => {
    const formData = new FormData()
    formData.append('newTodo', newItem)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
    }}
    const res = await axios.post(url+ "insert.php", formData, config)
    return res
}

export const delTodo = async ({id}) => {
    const res = await axios.get(url+ "Delete.php?id="+id)
    return res
}

export const updateTodo = async ({id}) => {
    console.log(id)
    const res = await axios.get(url+ "Update.php?id="+id)
    return res
}