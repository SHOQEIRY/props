import React from 'react'

export default function Profile(prop) {
  return (
    <div>
      <h2>Full Name: {prop.FullName}</h2>
      <h2>Bio: {prop.Bio}</h2>
      <h2>Profession: {prop.Profession}</h2>
      <img width='200px' height='200px' src={prop.children} alt="My Picture" />
      <button onClick={prop.myFunction}>alert name</button>
    </div>
  )
}
