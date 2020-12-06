import BaseLayout from '../../components/layouts/BaseLayout'
import { withRouter } from 'next/router'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Portfolio = (props) => {

    const [post, setPost] = useState([])

    useEffect(() => {
        (async () => {
        const { id } = props.router.query

            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .catch((e) => {
                    console.log('e from axios catch: ', e.response)
                    return []
                })
            console.log('res: ', res)
            setPost(res.data)
            console.log('NADA: ', post)
        })()

    }, [])

    return (
        <BaseLayout>
            <h1>I am Portfolio page</h1>
            <h2>{post.title}</h2>
            <h2>BODY: {post.body}</h2>
            <h2>ID: {post.id}</h2>
        </BaseLayout>
    )
}

export default withRouter(Portfolio)