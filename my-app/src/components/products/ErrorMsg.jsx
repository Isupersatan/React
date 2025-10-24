import React from 'react'

export default function ErrorMsg({msg}) {
  return (
    <>
    <h3 style={{ textAlign: "center", color: "red" }}>{msg}</h3>
    </>
  )
}
