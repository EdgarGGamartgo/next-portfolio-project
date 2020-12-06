import { useState } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'

const Blogs = () => {

  const [name, setName] = useState('Edgar')

  return (
    <BaseLayout>
     <h1>I am BLOGS page</h1>
    </BaseLayout>
  )

}

export default Blogs