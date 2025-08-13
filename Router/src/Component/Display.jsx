import React from 'react'
import { useParams } from 'react-router-dom'

export default function Display() {
    const id = useParams()
  return (
    <>
      <h1>Welcome to the Display Component {id} </h1>
    </>
  )
}
