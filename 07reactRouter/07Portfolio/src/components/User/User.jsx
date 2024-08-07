import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {Userid} = useParams()
  return (
    <div className='bg-slate-700 h-9 p-1 m-3 text-white '>User : {Userid}</div>
   
  )
}

export default User