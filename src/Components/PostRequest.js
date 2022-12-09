import React, { useEffect, useState } from "react"
import axios from "axios"

export default function PostRequest() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1);

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <ul>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <div>{post.title}</div>
            {/* {
                post.map(post=> <li key={post.id}>{post.title}</li>)
            } */}
        </ul>
    )
}