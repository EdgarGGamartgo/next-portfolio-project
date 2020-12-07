import BaseLayout from '@/components/layouts/BaseLayout'
import { withRouter } from 'next/router'
import { useState, useEffect } from 'react'
import axios from 'axios'
import BasePage from '@/components/BasePage';

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
            <BasePage>
                <h1>I am Portfolio page</h1>
                <h1>{post.title}</h1>
                <p>BODY: {post.body}</p>
                <p>ID: {post.id}</p>
            </BasePage>
        </BaseLayout>
    )
}

export default withRouter(Portfolio)