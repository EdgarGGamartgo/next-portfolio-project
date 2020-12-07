import { useState, useEffect } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import axios from 'axios'
import Link from 'next/link'
import BasePage from '../components/BasePage';

const Portfolios = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {

        (async () => {
            const res = await axios.get('/api/v1/posts')
                                   .catch((e) => {
                                    console.log('e from axios catch: ', e.response)
                                    return []
                                   })
            console.log('res: ', res)
            setPosts(res.data)
            //setPosts(res.data.slice(0, 10))
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
     <BasePage>
          <h1>I am Portfolio Page</h1>
          <ul>
            {renderPosts(posts)}
          </ul>
        </BasePage>
    </BaseLayout>
  )
}

export default Portfolios