import { useState } from 'react'
import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/BasePage';

const CV = () => {

  const [name, setName] = useState('Edgar')

  return (
    <BaseLayout>
     <BasePage>
          <h1>I am Cv Page</h1>
        </BasePage>
    </BaseLayout>
  )

}

export default CV