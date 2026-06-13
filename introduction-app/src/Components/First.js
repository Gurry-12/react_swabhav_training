import React from 'react'
import Second from './Second'

const First = (props) => {
  console.log(props)
  return (
    <>
    <div>First component</div>
    <p>{props.city}</p>
    <Second></Second>
    </>
  )
}

export default First