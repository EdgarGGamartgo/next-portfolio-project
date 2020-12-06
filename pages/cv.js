import { useState } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'

const CV = () => {

  const [name, setName] = useState('Edgar')

  return (
    <BaseLayout>
     <h1>I am CV page</h1>
    </BaseLayout>
  )

}

export default CV