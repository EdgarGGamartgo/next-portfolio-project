import { useState } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'

const Index = () => {

  const [name, setName] = useState('Edgar')

  return (
      <BaseLayout>
         <h1>I am index page</h1>
      </BaseLayout>
  )
}

export default Index