import React from 'react'

const Catalog = (props) => {
  return (
    <div className='container border-1'>
     <h5 className='text-red p-2 border-bottom border-red'>{props.data.type}</h5>
     <div className='text-secondary text-center '>All {props.data.type} will Show Here</div>
    </div>
  )
}

export {Catalog}