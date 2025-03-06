import React from 'react'
import Spinner from './Spinner.gif'

const spinner = ()=> {
    return (
      <div className='text-center'>
        <img className='my-3' src={Spinner} alt="Spinner"/>
      </div>
    )
  }
export default spinner