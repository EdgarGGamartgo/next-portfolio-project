import { useState } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'

const About = () => {

  const [name, setName] = useState('Edgar')

  return (
    <BaseLayout>
          <h1>I am ABOUT page</h1>
    </BaseLayout>
  )

}

export default About