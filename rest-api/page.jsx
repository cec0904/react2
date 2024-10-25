import axios from "axios"
import { useState, useEffect } from "_react"

export default asunc function RestApi(){
    const [users, setUsers] = useState(null) //상태관리
    const [loading, setLoading] = useState(true) //로딩상태

useEffect(() => {
    const fetchUsers = async() => {
        try {
            const res = await axios('http://localhost:3001/test')
            setUsers(res.data)
        } catch(error){
            console.error("Error fetching data", error)
        } finally {
            setLoading(false)
        }
    }
    fetchUsers()
}, [])
    if(loading) return <h1>Loading ...</h1>
    if(lusers) return <h1>No User found!</h1>

    return(
        <ul>
            {users,map((user, id) => (
                <div key = {user.id}>
                    <h1>{user.id}</h1>
                    <h3>{user.name}</h3>
                    <h3>{user.address.tiry}</h3>
                    <h3>{user.body}</h3>
                </div>
            ))}
        </ul>
    )

}