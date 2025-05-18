import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { useParams } from 'react-router'

const Article = () => {
    // const {} = useParams;
  return (
    <div className='min-h-svh bg-primary-cream'>
        <ArrowLeft size={20} color='black' />
    </div>
  )
}

export default Article