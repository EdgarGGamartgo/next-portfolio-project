import { useState, useEffect } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import axios from 'axios'
import Link from 'next/link'

const Portfolios = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {

        (async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
                                   .catch((e) => {
                                    console.log('e from axios catch: ', e.response)
                                    return []
                                   })
            console.log('res: ', res)
            setPosts(res.data.slice(0, 10))
            console.log('posts: ', posts)
        })()
        
  }, [])

  const renderPosts = posts => {
    return posts.map(post => 
        <li key={post.id} style={{ 'fontSize': '20px' }}>
            <Link as={`/portfolios/${post.id}`} href={`/portfolios/[id]`}>
                <a>
                    {post.title}
                </a>
            </Link>
        </li>)
  }

  return (
    <BaseLayout>
     <h1>I am PORTFOLIOS page</h1>
     <ul>
         {renderPosts(posts)} 
     </ul>
    </BaseLayout>
  )
}

export default Portfolios