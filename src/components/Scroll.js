import React from 'react'

const Scroll = (props) => {
  return (
    <div style={{"overflowY":"scroll", "border":"2px solid black", "height":"500px" }}>
        <div className='container'>
        {props.children}
        </div>
    </div>
  )
}

export default Scroll;