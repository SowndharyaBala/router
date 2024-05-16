import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    let { userid } = useParams();
  return (
    <div className='bg-orange-500 text-black text-3xl text-center py-5'>welcome: {userid}</div>
  )
}

export default User